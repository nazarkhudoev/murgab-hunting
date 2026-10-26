import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import { getInstagramPosts } from "@/lib/instagram";
import { Instagram, Layers, Play } from "lucide-react";
import "./Blog.css";

export default async function Blog({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  const posts = await getInstagramPosts();
  const english = locale === "en";

  return (
    <section className="mt-[200px]" id="blog">
      <h3 className="text-center text-white text-2xl font-semibold mb-[100px] uppercase tracking-[1.5px] blog__title">
        {t("Content.Blog.text1")}
      </h3>
      <div className="instagram-feed">
        <a
          className="instagram-profile"
          href="https://www.instagram.com/murgabhunting/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={22} aria-hidden="true" /> @murgabhunting
          <span>
            {english ? "Follow our expeditions ↗" : "Следите за экспедициями ↗"}
          </span>
        </a>
        {posts.length ? (
          <div className="instagram-grid">
            {posts.map((post, index) => (
              <a
                key={post.id}
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
                {/* Instagram supplies expiring CDN URLs; load them directly without an image proxy cache. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={
                    english
                      ? "An update from Murgab Hunting on Instagram"
                      : "Публикация Murgab Hunting в Instagram"
                  }
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                {post.mediaType !== "IMAGE" && (
                  <span className="instagram-post-type">
                    {post.mediaType === "VIDEO" ? (
                      <Play size={20} aria-hidden="true" />
                    ) : (
                      <Layers size={20} aria-hidden="true" />
                    )}
                  </span>
                )}
              </a>
            ))}
          </div>
        ) : (
          <p className="instagram-empty">
            {english
              ? "See our latest photographs and expedition updates on Instagram."
              : "Смотрите свежие фотографии и новости экспедиций в Instagram."}
          </p>
        )}
      </div>
    </section>
  );
}
