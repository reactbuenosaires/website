"use client";

import React from "react";
import CardPastEvent from "@/components/past_events/CardPastEvent";
import { useYoutubeDataContext } from "@/context/YoutubeData";
import style from "./PastEventsSection.module.css";
import Button from "../Button";

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
        <div className={style.button_containe}>
          <a
            href="https://www.youtube.com/channel/UC8lMWXElwhflZxWqsE6BuPQ"
            target="blank"
          >
            <Button>Youtube</Button>
          </a>
        </div>
      )}
    </>
  );
};

export default VideosList;
