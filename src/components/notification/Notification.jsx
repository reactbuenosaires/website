"use client";

import style from "./notification.module.css";
import { useState } from "react";
import { useYoutubeDataContext } from "@/context/YoutubeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { videoStatus, selectedVideo } = useYoutubeDataContext();

  const statusMessages = {
    none: "Revive la última meetup:",
    live: "😎 ¡Estamos en vivo!",
    upcoming: "🚀 Próxima Meetup:",
  };

  const notificationMessage = statusMessages[videoStatus] || "";

  return (
    <>
      {selectedVideo && videoStatus && isOpen && (
        <section className={style.notification}>
          <div className={style.icon_container}>
            <FontAwesomeIcon
              icon={faX}
              className={style.close_icon}
              onClick={() => setIsOpen(false)}
              title="Cerrar"
            />
          </div>
          <div className={style.card}>
            <p className={style.title}>{notificationMessage}</p>
            <div>
              <a
                className={style.link}
                href={`https://www.youtube.com/watch?v=${selectedVideo?.id?.videoId}`}
                target="_blank"
              >
                {selectedVideo?.snippet?.title}
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Notification;
