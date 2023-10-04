import React from "react";
import style from "@/components/past_events/PastEventsSection.module.css";
import Image from "next/image";

const CardPastEvent = ({videoId, thumbnailUrl, title}) => {
  return (
    <div className={style.youtube_card}>
      <a
        target="_blank"
        className={style.links}
        href={`https://www.youtube.com/watch?v=${videoId}`}
      >
        <div className={style.image_container}>
          <Image
            className={style.image}
            src={thumbnailUrl}
            alt={`Meetup de la comunidad React en Buenos Aires: ${title}`}
            width="480"
            height="360"
          />
        </div>
        <h4 className={style.video_title}>{title}</h4>
      </a>
    </div>
  );
};

export default CardPastEvent;
