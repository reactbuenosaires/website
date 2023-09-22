import style from "./modal.module.css";
import {
  getListVideoYoutube,
  fetchYoutubeData,
} from "@/app/components/youtube/fetchYoutubeData";

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Modal() {
  const data = await fetchYoutubeData(apiKey);
  let videoStatus = "upcoming";
  const videos = getListVideoYoutube(data, videoStatus);
  return (
    <div className={style.modal}>
      <p>¡Próxima MeetUp!🚀</p>
      {videos.map((video, index) => (
        <div key={index}>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">{video.snippet.title}</a>
        </div>
      ))}
    </div>
  );
}
