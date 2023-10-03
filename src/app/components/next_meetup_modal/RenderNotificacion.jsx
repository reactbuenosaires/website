import { Fragment } from "react";
import style from "./notification.module.css";
import {
  nextMeetup,
} from "@/app/components/past_events/fetchYoutubeData";

export default function RenderNotificacion() {
  console.log(nextMeetup)
  return (
    <Fragment>
       {nextMeetup.snippet.liveBroadcastContent === 'upcoming' &&
        <div className={style.notification_bar}>
        <div className={style.card}>
          <p className={style.title}>Próxima Meetup</p>
          <div>
            <a
              className={style.link}
              href={`https://www.youtube.com/watch?v=${nextMeetup.id.videoId}`}
              target="_blank"
            >
              {nextMeetup.snippet.title}
            </a>
          </div>
        </div>
      </div>
}

    </Fragment>
   
  );
}
