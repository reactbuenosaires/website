"use client";

import { useState, useEffect } from 'react'
import style from "./notification.module.css";
import {
  getListVideoYoutube,
  fetchYoutubeData,
} from "@/app/components/past_events/fetchYoutubeData";
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;


export  default  function CloseNotification({ children }) {
  const [isDisplay, setIsDisplay] = useState(true);
  
  return (
    <>
      {isDisplay && (
        <div className={style.notification}>
          <p
            className={style.close_text}
            onClick={() => setIsDisplay(false)}
          >
            Cerrar
          </p>
          {children}
        </div>
      )}
    </>
  );
}
