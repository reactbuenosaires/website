import Title from "../Title";
import style from "@/app/components/past_events/PastEventsSection.module.css";
import Image from "next/image";
import dotenv from "dotenv";
import {
  getListVideoYoutube,
  fetchYoutubeData,
} from "@/app/components/past_events/fetchYoutubeData";
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Youtube() {
  const data = await fetchYoutubeData(apiKey);
  let videoStatus = "none";
  const videos = getListVideoYoutube(data, videoStatus);

  return (
    <section className={style.past_events_container}>
      <Title titleDescription="MEETUPS REALIZADAS" />
      <div className={style.subtitle_container}>
        <h3 className={style.subtitle}>
          ¡Descrubí todo el contenido de meetups pasadas en Youtube!
        </h3>
      </div>
      <section className={style.videos_container}>
        {videos.map((video, index) => (
          <div className={style.youtube_card}>
            <a
              key={index}
              target="_blank"
              className={style.links}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            >
              <div className={style.image_container}>
                <Image
                  className={style.image}
                  src={video.snippet.thumbnails.high.url}
                  alt="Video de Youtube"
                  width={video.snippet.thumbnails.high.width}
                  height={video.snippet.thumbnails.high.height}
                />
              </div>
              <h4 className={style.video_title}>{video.snippet.title}</h4>
            </a>
          </div>
        ))}
      </section>
    </section>
  );
}
