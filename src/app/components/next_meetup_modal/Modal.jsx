import style from "./modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeetup } from "@fortawesome/free-brands-svg-icons";
import {
  liveContentStatus,
  fetchYoutubeData,
  liveContent,
} from "@/app/components/past_events/fetchYoutubeData";

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Modal() {
  const data = await fetchYoutubeData(apiKey);
  console.log(data);
  let video = await liveContent(data); 
  const videoStatus = await liveContentStatus(data);
  return (
    <div className={style.modal}>
      <p className={style.title}>
        <a
          href="https://www.meetup.com/es/react-en-buenos-aires/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faMeetup}
            className={style.social_media_icon}
          />
        </a>
        {videoStatus === 'upcoming'? 'Próxima Meetup 🚀' : videoStatus === 'live'  ? 'Estamos es vivo 😎' : 'No hay video pendiente'}
      </p>
      <div>
      {/* {video.map((videoContent, index) => (
        <div key={index}>
          <a
            className={style.link}
            href={`https://www.youtube.com/watch?v=${videoContent.id.videoId}`}
            target="_blank"
          >
            {videoContent.snippet.title}
          </a>
        </div>
      ))} */}
      </div>
      
    </div>
  );
}
