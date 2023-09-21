import Title from "../Title";
import style from "@/app/components/youtube/youtube.module.css";
import Image from "next/image";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

function getLiveBroadcasts(data) {
  return data.filter(item => {
    const liveBroadcastContent = item.snippet.liveBroadcastContent;
    return liveBroadcastContent === "none";
  }).slice(0, 4);
}

export default async function Youtube() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC8lMWXElwhflZxWqsE6BuPQ&part=snippet,id&order=date&maxResults=5`
  );
  const json_Data = await res.json();
  const data = json_Data.items;
  const videos =  getLiveBroadcasts(data);

  return (
    <div className={style.youtube_section}>
      <Title titleDescription="MEETUPS REALIZADAS" />
      <h3 className={style.subtitle}>
        ¡Descrubí todo el contenido de meetups pasadas en Youtube!
      </h3>
      <div className={style.container}>
        {videos.map((video, index) => (
          <a
            className={style.yt_enlaces}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            key={index}
          >
            <div className={style.youtube_card}>
              <Image
                className={style.image}
                src={video.snippet.thumbnails.high.url}
                alt="Video de Youtube"
                width={video.snippet.thumbnails.high.width}
                height={video.snippet.thumbnails.high.height}
              />
              <p className={style.titulo}>{video.snippet.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
