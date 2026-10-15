"use client";
import { useRef, useState, type FormEvent } from "react";
import { labels } from "@/data/site-content";
import { trophiesData } from "@/data/trophies";
import type { Locale } from "@/lib/navigation";
import { track } from "@vercel/analytics";

export default function InquiryDraft({
  locale,
  embedded = false,
}: {
  locale: Locale;
  embedded?: boolean;
}) {
  const [ready, setReady] = useState(false);
  const [sending, setSending] = useState(false);
  const inFlight = useRef(false);
  const submission = useRef({ payload: "", id: "" });
  const [started, setStarted] = useState(false);
  const [error, setError] = useState("");
  const words =
    locale === "en"
      ? {
          name: "Name",
          email: "Email",
          species: "Interested species",
          dates: "Preferred dates (optional)",
          message: "Message",
          optional: "Not decided",
          ready:
            "Your inquiry has been sent. Our team will reply to the email address you provided.",
          error: "Keep your message under 3,000 characters.",
          sending: "Sending…",
          failed:
            "We could not send your inquiry. Please try again or contact us using the email or phone below.",
          limited:
            "Too many attempts. Please try again in 10 minutes or contact us directly.",
        }
      : {
          name: "Имя",
          email: "Email",
          species: "Интересующий вид",
          dates: "Желаемые даты (необязательно)",
          message: "Сообщение",
          optional: "Пока не выбрано",
          ready:
            "Ваш запрос отправлен. Наша команда ответит на указанный email.",
          error: "Сообщение должно содержать не более 3000 символов.",
          sending: "Отправка…",
          failed:
            "Не удалось отправить запрос. Попробуйте ещё раз или свяжитесь с нами по email или телефону ниже.",
          limited:
            "Слишком много попыток. Повторите через 10 минут или свяжитесь с нами напрямую.",
        };
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get("website")) return;
    const message = String(fields.get("message") || "").trim();
    if (message.length > 3000) {
      setError(words.error);
      return;
    }
    const payload = JSON.stringify({
      name: fields.get("name"),
      email: fields.get("email"),
      species: fields.get("species"),
      dates: fields.get("dates"),
      message,
      website: fields.get("website"),
      locale,
    });
    if (submission.current.payload !== payload)
      submission.current = { payload, id: crypto.randomUUID() };
    inFlight.current = true;
    setSending(true);
    setReady(false);
    setError("");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...JSON.parse(payload),
          requestId: submission.current.id,
        }),
        signal: AbortSignal.timeout(20_000),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setError(response.status === 429 ? words.limited : words.failed);
        return;
      }
      form.reset();
      submission.current = { payload: "", id: "" };
      setReady(true);
      track("inquiry_sent", { locale });
    } catch {
      setError(words.failed);
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }
  return (
    <section className={embedded ? "contact-inquiry" : "content-section"}>
      {!embedded && <h2>{labels.emailDraft[locale]}</h2>}
      <p>{labels.emailDraftHelp[locale]}</p>
      <noscript>
        {locale === "en"
          ? "Please enable JavaScript to send this form, or use the contact email below."
          : "Включите JavaScript для отправки формы или используйте email ниже."}
      </noscript>
      <form
        className="inquiry-draft"
        onSubmit={submit}
        aria-busy={sending}
        aria-describedby={error ? "inquiry-error" : undefined}
        onFocusCapture={() => {
          if (!started) {
            track("contact_form_start", { locale });
            setStarted(true);
          }
        }}
      >
        <div className="inquiry-field">
          <label htmlFor="inquiry-name">{words.name}</label>
          <input
            id="inquiry-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </div>
        <div className="inquiry-field">
          <label htmlFor="inquiry-email">{words.email}</label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
        <div className="inquiry-field">
          <label htmlFor="inquiry-species">{words.species}</label>
          <select
            id="inquiry-species"
            name="species"
            onChange={(event) =>
              track("species_interest", { species: event.target.value, locale })
            }
          >
            <option value="undecided">{words.optional}</option>
            {trophiesData.map((hunt) => (
              <option key={hunt.id} value={hunt.id}>
                {hunt.title[locale]}
              </option>
            ))}
          </select>
        </div>
        <div className="inquiry-field">
          <label htmlFor="inquiry-dates">{words.dates}</label>
          <input id="inquiry-dates" name="dates" maxLength={100} />
        </div>
        <div className="inquiry-field inquiry-field-wide">
          <label htmlFor="inquiry-message">{words.message}</label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={3}
            required
            maxLength={3000}
            aria-describedby={error ? "inquiry-error" : undefined}
          />
        </div>
        <div hidden>
          <label htmlFor="inquiry-website">Website</label>
          <input
            id="inquiry-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        {error && (
          <p id="inquiry-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="expedition-button" disabled={sending}>
          {sending ? words.sending : labels.emailDraft[locale]}
        </button>
        <p role="status">{ready ? words.ready : ""}</p>
      </form>
    </section>
  );
}
