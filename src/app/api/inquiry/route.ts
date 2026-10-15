import { createHash } from "node:crypto";
import { business } from "@/data/site-content";
import { animalSlugs } from "@/lib/navigation";

export const runtime = "nodejs";
const MAX_BODY = 16_384;
const WINDOW = 10 * 60 * 1000;
// Best-effort, bounded protection per server instance; see docs/RESEND-SETUP.md.
const attempts = new Map<string, { count: number; expires: number }>();
function limited(key: string, maximum: number) {
  const now = Date.now();
  for (const [entry, value] of Array.from(attempts))
    if (value.expires <= now) attempts.delete(entry);
  let value = attempts.get(key);
  if (!value) {
    if (attempts.size >= 2000) return true;
    value = { count: 0, expires: now + WINDOW };
    attempts.set(key, value);
  }
  return ++value.count > maximum;
}
const digest = (value: string) =>
  createHash("sha256").update(value).digest("hex");
const reply = (status: number, code: string) =>
  Response.json(
    { ok: status === 200, code },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(status === 429 ? { "Retry-After": "600" } : {}),
      },
    },
  );

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  const allowed = new Set([requestUrl.origin]);
  // Next.js can normalize request.url to its internal hostname. Compare the
  // browser origin with the actual incoming Host as well, without treating
  // localhost and 127.0.0.1 as interchangeable browser origins.
  const host = request.headers.get("host");
  const forwardedProtocol = request.headers.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol === "https" || forwardedProtocol === "http"
      ? `${forwardedProtocol}:`
      : requestUrl.protocol;
  if (host) {
    try {
      const publicUrl = new URL(`${protocol}//${host}`);
      if (publicUrl.host === host && !publicUrl.username && !publicUrl.password)
        allowed.add(publicUrl.origin);
    } catch {
      /* Ignore malformed host headers. */
    }
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try {
      allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin);
    } catch {
      /* Ignore invalid optional site URL. */
    }
  }
  if (
    !origin ||
    !allowed.has(origin) ||
    request.headers.get("sec-fetch-site") === "cross-site"
  )
    return reply(403, "forbidden");
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply(415, "invalid_request");
  if (Number(request.headers.get("content-length")) > MAX_BODY)
    return reply(413, "invalid_request");
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(`ip:${digest(ip)}`, 5) || limited("global", 60))
    return reply(429, "rate_limited");
  let data: Record<string, unknown>;
  const reader = request.body?.getReader();
  if (!reader) return reply(400, "invalid_request");
  try {
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > MAX_BODY) {
        await reader.cancel();
        return reply(413, "invalid_request");
      }
      chunks.push(chunk.value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return reply(400, "invalid_request");
    data = parsed as Record<string, unknown>;
  } catch {
    return reply(400, "invalid_request");
  }
  if (typeof data.website === "string" && data.website)
    return reply(200, "sent");
  const field = (key: string, max: number, required = true) => {
    const value = data[key];
    if (
      typeof value !== "string" ||
      value.length > max ||
      (required && !value.trim())
    )
      return null;
    return value.trim();
  };
  const name = field("name", 100);
  const email = field("email", 254);
  const species = field("species", 100);
  const dates = field("dates", 100, false);
  const message = field("message", 3000);
  const requestId = field("requestId", 36);
  const locale = data.locale;
  if (
    !name ||
    !email ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
    /[\r\n]/.test(name) ||
    !species ||
    !["undecided", ...animalSlugs].includes(species) ||
    dates === null ||
    !message ||
    !requestId ||
    !/^[0-9a-f-]{36}$/i.test(requestId) ||
    (locale !== "en" && locale !== "ru")
  )
    return reply(400, "invalid_request");
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return reply(503, "unavailable");
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Species: ${species}`,
    `Preferred dates: ${dates || "Not specified"}`,
    `Language: ${locale}`,
    "",
    message,
  ].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `inquiry/${requestId}/${digest(text)}`,
      },
      body: JSON.stringify({
        from,
        to: [business.email],
        reply_to: email,
        subject: "Hunt inquiry — Murgab Hunting",
        text,
      }),
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Inquiry email provider rejected request", {
        status: response.status,
      });
      return reply(502, "send_failed");
    }
    const result: unknown = await response.json();
    if (
      !result ||
      typeof result !== "object" ||
      !("id" in result) ||
      typeof result.id !== "string" ||
      !result.id
    )
      return reply(502, "send_failed");
    return reply(200, "sent");
  } catch {
    console.error("Inquiry email provider unavailable");
    return reply(502, "send_failed");
  }
}
