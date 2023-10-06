"use client";

import React from "react";
import CardPastEvent from "@/components/past_events/CardPastEvent";
import { useYoutubeDataContext } from "@/context/YoutubeData";
import style from "./PastEventsSection.module.css";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const VideosList = () => {
  const { videosList } = useYoutubeDataContext();
  return (
    <>
      {videosList.length > 0 ? (
        <section className={style.videos_container}>
          {videosList.map((video) => (
            <CardPastEvent
              key={video.id.videoId}
              videoId={video.id.videoId}
              thumbnailUrl={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
            />
          ))}
        </section>
      ) : (
        <section className={style.button_containe}>
          <Button>
            <a
              target="blank"
              className={style.link}
              href="https://www.youtube.com/@react_ba"
            >
              Ver en Youtube
              <FontAwesomeIcon icon={faYoutube} className={style.icon} />
            </a>
          </Button>
        </section>
      )}
    </>
  );
};

export default VideosList;
