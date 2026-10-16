import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/navigation";
import { business } from "@/data/site-content";
import { getLatestYouTubeVideos } from "@/lib/youtube";
import VideoGallery from "./VideoGallery";
import "./Videos.css";

export default async function Videos({ locale }: { locale: Locale }) {
  const videos = await getLatestYouTubeVideos();
  const en = locale === "en";
  const channelUrl = business.social.find((url) =>
    url.startsWith("https://www.youtube.com/"),
  );
  return (
    <section
      id="video"
      className="content-section youtube-stories"
      aria-labelledby="youtube-stories-title"
    >
      <div className="youtube-stories-heading">
        <p className="youtube-eyebrow">
          <span aria-hidden="true" />
          {en ? "Stories from the Pamirs" : "Истории Памира"}
        </p>
        <h2 id="youtube-stories-title">
          {en
            ? "Expeditions in one of the world’s wildest places"
            : "Экспедиции в один из самых диких уголков мира"}
        </h2>
      </div>
      {videos.length > 0 ? (
        <VideoGallery videos={videos} locale={locale} />
      ) : (
        <p className="youtube-unavailable">
          {en
            ? "Explore our expedition films on the Murgab Hunting YouTube channel."
            : "Смотрите фильмы о наших экспедициях на YouTube-канале Murgab Hunting."}
        </p>
      )}
      {channelUrl && (
        <div className="youtube-stories-bottom">
          <a href={channelUrl} target="_blank" rel="noopener noreferrer">
            {en ? "View all on YouTube" : "Все видео на YouTube"}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      )}
    </section>
  );
}
