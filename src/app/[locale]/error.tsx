"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = usePathname().startsWith("/ru") ? "ru" : "en";
  return (
    <main className="expedition-main content-shell">
      <h1>
        {locale === "en"
          ? "We could not load this page"
          : "Не удалось загрузить страницу"}
      </h1>
      <p>
        {locale === "en"
          ? "Try again or contact our team directly."
          : "Попробуйте ещё раз или свяжитесь с командой."}
      </p>
      <button className="expedition-button" onClick={reset}>
        {locale === "en" ? "Try again" : "Повторить"}
      </button>
      <p>
        <Link href={`/${locale}/contact`}>
          {locale === "en" ? "Contact the team" : "Связаться с командой"}
        </Link>
      </p>
    </main>
  );
}
