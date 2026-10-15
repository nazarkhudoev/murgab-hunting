# Resend inquiry email setup

The website sends enquiries through `POST /api/inquiry` and the Resend HTTPS API. No additional package is needed. All inquiry forms share this endpoint. The recipient is fixed to `shirinbek0494@gmail.com.com`; Reply-To uses the validated visitor email. The sender and API key are server-only environment variables.

## Configure sending

1. Add your sending domain in [Resend Domains](https://resend.com/domains). Add the DNS records shown there and wait for verification. Use a sender address belonging to that verified domain; do not use a Gmail address as the sender.
2. Create a sending API key in [Resend API Keys](https://resend.com/api-keys), preferably restricted to the sending domain.
3. Copy `.env.example` to `.env.local` and set:

   ```dotenv
   RESEND_API_KEY=re_your_private_key
   RESEND_FROM_EMAIL="Murgab Hunting <inquiries@your-verified-domain.com>"
   ```

4. Restart the development server. For production, add these same variables to the hosting provider's server environment and redeploy/restart. In Docker, pass runtime variables with `--env-file .env.local`; never bake secrets into the image. Do not use a `NEXT_PUBLIC_` prefix for Resend secrets or put them in Git.
5. Submit a real inquiry, check the recipient inbox and the Resend delivery logs, and confirm that replying addresses the visitor. API acceptance is not a guarantee of inbox delivery. The form reports failure honestly if configuration is missing or Resend rejects the request.

For API details, see [Resend Send Email](https://resend.com/docs/api-reference/emails/send-email) and [verified domains](https://resend.com/docs/dashboard/domains/introduction).

## Behaviour and abuse protection

- Required name/email/message, field and body-size limits, species validation, same-origin JSON requests, and a hidden honeypot are checked on the server.
- Requests are limited to five attempts per IP and sixty globally per ten minutes, per running server instance. The bounded in-memory limiter resets on restart and is not shared between serverless instances or replicas. Configure shared rate limiting or hosting firewall rules for public production traffic. The trusted reverse proxy must overwrite `X-Forwarded-For` rather than accepting arbitrary client values.
- Repeated identical client retries retain an idempotency key, preventing duplicate provider sends within Resend's idempotency window. The button is disabled while sending. Form values are retained on failure and cleared after acceptance.
- Emails contain plain text. Recipient and subject are server-controlled. Keys and inquiry contents are not logged or included in analytics; analytics receives only the locale and success/start events.
- Tests mock Resend. No real message was sent during implementation, and no API key or sender address has been configured by this change.
