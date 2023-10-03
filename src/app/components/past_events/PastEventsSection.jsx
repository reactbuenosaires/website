import Title from "../Title";
import CardPastEvent from "@/app/components/past_events/CardPastEvent";
import style from "@/app/components/past_events/PastEventsSection.module.css";
import dotenv from "dotenv";
import {
  getListVideoYoutube,
  lastYoutubeVideos,
} from "@/app/components/past_events/fetchYoutubeData";
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function PastEvents() {
  const data = lastYoutubeVideos;
   let videoStatus = "none";
  const videos = getListVideoYoutube(data, videoStatus);

  return (
    <section className={style.past_events_container}>
      <Title titleDescription="MEETUPS REALIZADAS" />
      <div className={style.subtitle_container}>
        <h3 className={style.subtitle}>
          ¡Reviví todo el contenido de meetups pasadas en nuestro canal de
          Youtube!
        </h3>
      </div>
      <section className={style.videos_container}>
        {videos.map((video, index) => (
          <CardPastEvent
            key={index}
            videoId={video.id.videoId}
            thumbnailUrl={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
          />
        ))}
      </section>
    </section>
  );
}
