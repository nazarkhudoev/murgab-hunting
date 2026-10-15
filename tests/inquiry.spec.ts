import { test, expect } from "@playwright/test";
import { POST } from "../src/app/api/inquiry/route";

const originalFetch = globalThis.fetch;
const originalKey = process.env.RESEND_API_KEY;
const originalFrom = process.env.RESEND_FROM_EMAIL;
const payload = {
  name: "Test Visitor",
  email: "visitor@example.com",
  species: "ibex",
  dates: "October",
  message: "Please send expedition information.",
  locale: "en",
  website: "",
  requestId: "12345678-1234-4234-8234-123456789abc",
};
let identity = 0;
function request(
  body: unknown = payload,
  origin = "http://localhost:3100",
  ip = String(++identity),
) {
  return new Request("http://localhost:3100/api/inquiry", {
    method: "POST",
    headers: {
      origin,
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}
test.beforeEach(() => {
  process.env.RESEND_API_KEY = "re_test_placeholder";
  process.env.RESEND_FROM_EMAIL = "Murgab Hunting <inquiries@example.com>";
  globalThis.fetch = async () => {
    throw new Error("Unexpected provider request");
  };
});
test.afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
  if (originalFrom === undefined) delete process.env.RESEND_FROM_EMAIL;
  else process.env.RESEND_FROM_EMAIL = originalFrom;
});
test("inquiry sends only to the business inbox and uses visitor reply-to with stable retry keys", async () => {
  const sent: { headers: Headers; body: Record<string, unknown> }[] = [];
  globalThis.fetch = async (url, options) => {
    expect(url).toBe("https://api.resend.com/emails");
    sent.push({
      headers: new Headers(options?.headers),
      body: JSON.parse(String(options?.body)),
    });
    return Response.json({ id: "mock-email-id" });
  };
  for (let count = 0; count < 2; count++) {
    const response = await POST(
      request({
        ...payload,
        to: "attacker@example.com",
        from: "attacker@example.com",
      }),
    );
    expect(response.status).toBe(200);
  }
  expect(sent[0].body).toMatchObject({
    from: "Murgab Hunting <inquiries@example.com>",
    to: ["shirinbek0494@gmail.com"],
    reply_to: payload.email,
  });
  expect(sent[0].body.text).toContain(payload.message);
  expect(sent[0].headers.get("Idempotency-Key")).toBe(
    sent[1].headers.get("Idempotency-Key"),
  );
});
test("inquiry rejects untrusted origins and invalid or oversized input", async () => {
  expect((await POST(request(payload, "https://other.example"))).status).toBe(
    403,
  );
  for (const changes of [
    { email: "invalid" },
    { name: " " },
    { message: " " },
    { species: "invalid" },
    { locale: "fr" },
    { email: "test@example.com\r\nBcc: other@example.com" },
  ])
    expect((await POST(request({ ...payload, ...changes }))).status).toBe(400);
  expect(
    (await POST(request({ ...payload, message: "x".repeat(20_000) }))).status,
  ).toBe(413);
});
test("inquiry honeypot does not contact the email provider", async () => {
  expect(
    (await POST(request({ ...payload, website: "spam.example" }))).status,
  ).toBe(200);
});
test("inquiry reports missing configuration and provider failure without leaking details", async () => {
  delete process.env.RESEND_API_KEY;
  expect((await POST(request())).status).toBe(503);
  process.env.RESEND_API_KEY = "re_test_placeholder";
  globalThis.fetch = async () =>
    Response.json({ message: "private provider details" }, { status: 403 });
  const response = await POST(request());
  expect(response.status).toBe(502);
  expect(await response.text()).not.toContain("private provider details");
  globalThis.fetch = async () => {
    throw new Error("provider timeout");
  };
  expect((await POST(request())).status).toBe(502);
  globalThis.fetch = async () => Response.json({});
  expect((await POST(request())).status).toBe(502);
});
test("inquiry throttles repeated requests", async () => {
  const ip = "rate-limit-test";
  for (let count = 0; count < 5; count++)
    expect(
      (await POST(request({ ...payload, website: "spam" }, undefined, ip)))
        .status,
    ).toBe(200);
  const response = await POST(request(payload, undefined, ip));
  expect(response.status).toBe(429);
  expect(response.headers.get("Retry-After")).toBe("600");
});

test("inquiry UI retains input on failure, then sends and clears on success", async ({
  page,
}) => {
  await page.route("https://static.elfsight.com/**", (route) => route.abort());
  await page.goto("/en/contact#book");
  let fail = true;
  const keys: string[] = [];
  await page.route("**/api/inquiry", async (route) => {
    keys.push(route.request().postDataJSON().requestId);
    await route.fulfill({
      status: fail ? 502 : 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: !fail }),
    });
  });
  await page.getByLabel("Name", { exact: true }).fill(payload.name);
  await page.getByLabel("Email", { exact: true }).fill(payload.email);
  await page.getByLabel("Message", { exact: true }).fill(payload.message);
  await page.getByRole("button", { name: "Send inquiry", exact: true }).click();
  await expect(page.locator("#inquiry-error")).toBeVisible();
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue(
    payload.message,
  );
  fail = false;
  await page.getByRole("button", { name: "Send inquiry", exact: true }).click();
  await expect(page.locator('form [role="status"]')).toContainText(
    "Your inquiry has been sent",
  );
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue("");
  expect(keys[0]).toBe(keys[1]);
});

test("inquiry accepts the incoming public host when Next normalizes its internal URL", async () => {
  for (const [host, protocol] of [
    ["127.0.0.1:3000", "http"],
    ["www.murgabhunting.com", "https"],
  ]) {
    const response = await POST(
      new Request("http://localhost:3000/api/inquiry", {
        method: "POST",
        headers: {
          host,
          origin: `${protocol}://${host}`,
          "x-forwarded-proto": protocol,
          "sec-fetch-site": "same-origin",
          "content-type": "application/json",
          "x-forwarded-for": `normalized-${host}`,
        },
        body: JSON.stringify({ ...payload, website: "honeypot-no-email" }),
      }),
    );
    expect(response.status).toBe(200);
  }
  const response = await POST(
    new Request("http://localhost:3000/api/inquiry", {
      method: "POST",
      headers: {
        host: "127.0.0.1:3000",
        origin: "https://attacker.example",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }),
  );
  expect(response.status).toBe(403);
});
