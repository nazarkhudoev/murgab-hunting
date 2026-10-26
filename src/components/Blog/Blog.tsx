import type { Locale } from "@/lib/navigation";
import { getInstagramPosts } from "@/lib/instagram";
import { ArrowUpRight, Instagram, Layers, Play } from "lucide-react";
import "./Blog.css";

export default async function Blog({ locale }: { locale: Locale }) {
  const posts = await getInstagramPosts();
  const english = locale === "en";
  return (
    <section
      className="instagram-feed"
      id="instagram"
      aria-labelledby="instagram-title"
    >
      <header className="instagram-heading">
        <div>
          <p className="eyebrow">
            {english ? "From the field" : "Из экспедиций"}
          </p>
          <h2 id="instagram-title">
            {english ? "Life in the Pamirs" : "Жизнь на Памире"}
          </h2>
          <p>
            {english
              ? "Photographs, stories and moments from @murgabhunting."
              : "Фотографии, истории и мгновения от @murgabhunting."}
          </p>
        </div>
        <a
          className="instagram-profile"
          href="https://www.instagram.com/murgabhunting/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={19} aria-hidden="true" /> @murgabhunting{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </header>
      {posts.length ? (
        <div className="instagram-grid">
          {posts.map((post, index) => (
            <article key={post.id} className="instagram-card">
              <a
                className="instagram-post"
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  english
                    ? `View Instagram post ${index + 1} (opens in a new tab)`
                    : `Открыть публикацию ${index + 1} в Instagram (новая вкладка)`
                }
              >
                {/* Instagram CDN URLs expire; avoid retaining them in an image proxy cache. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={
                    english
                      ? "From the Murgab Hunting expedition journal"
                      : "Из дневника экспедиций Murgab Hunting"
                  }
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="instagram-post-type">
                  {post.mediaType === "VIDEO" ? (
                    <Play size={16} aria-hidden="true" />
                  ) : post.mediaType === "CAROUSEL_ALBUM" ? (
                    <Layers size={16} aria-hidden="true" />
                  ) : (
                    <Instagram size={16} aria-hidden="true" />
                  )}
                  {post.mediaType === "VIDEO"
                    ? english
                      ? "Video"
                      : "Видео"
                    : post.mediaType === "CAROUSEL_ALBUM"
                      ? english
                        ? "Photo story"
                        : "Фотоистория"
                      : english
                        ? "Photograph"
                        : "Фотография"}
                </span>
              </a>
              <div className="instagram-card-body">
                <div className="instagram-byline">
                  <span>@murgabhunting</span>
                  {post.timestamp && (
                    <time dateTime={post.timestamp}>
                      {new Intl.DateTimeFormat(english ? "en-GB" : "ru-RU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC",
                      }).format(new Date(post.timestamp))}
                    </time>
                  )}
                </div>


                {post.caption ? (
                  post.caption.length > 190 ? (
                    <details className="instagram-caption-details">
                      <summary>
                        <span className="instagram-caption-preview">
                          {post.caption.slice(0, 190)}…
                        </span>
                        <span className="instagram-read-more">
                          {english ? "Read full caption" : "Читать полностью"}
                        </span>
                      </summary>
                      <p className="instagram-caption">{post.caption}</p>
                    </details>
                  ) : (
                    <p className="instagram-caption">{post.caption}</p>
                  )
                ) : (
                  <p className="instagram-caption instagram-caption-missing">
                    {english
                      ? "Discover this moment on Instagram."
                      : "Посмотрите эту историю в Instagram."}
                  </p>
                )}
                <a
                  className="instagram-post-link"
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {english ? "View on Instagram" : "Открыть в Instagram"}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="instagram-empty">
          <Instagram size={32} aria-hidden="true" />
          <h3>
            {english
              ? "The journey continues on Instagram"
              : "Путешествие продолжается в Instagram"}
          </h3>
          <p>
            {english
              ? "Explore our latest photographs and expedition stories on @murgabhunting."
              : "Свежие фотографии и истории экспедиций — в @murgabhunting."}
          </p>
          <a
            className="instagram-post-link"
            href="https://www.instagram.com/murgabhunting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {english ? "Visit our Instagram" : "Наш Instagram"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </section>
  );
}
