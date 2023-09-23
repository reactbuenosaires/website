import style from "./modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-brands-svg-icons";
import {
  getListVideoYoutube,
  fetchYoutubeData,
} from "@/app/components/past_events/fetchYoutubeData";

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Modal() {
  const data = await fetchYoutubeData(apiKey);
  let videoStatus = "upcoming";
  const videos = getListVideoYoutube(data, videoStatus);
  return (
    <div className={style.modal}>
      <p className={style.title}>¡Próxima Meetup!🚀</p>
      {videos.map((video, index) => (
        <div key={index}>
             <FontAwesomeIcon icon={faXmark} />
          <a className={style.link}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
          >
            {video.snippet.title}
          </a>
        </div>
      ))}
    </div>
  );
}
