"use client";

import { useState } from "react";
import style from './notification.module.css'

export default function CloseNotification({ children }) {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <>
      {isDisplay && (
        <>
          <p className={style.close_text } onClick={() => setIsDisplay(!isDisplay)}>Cerrar</p>
          {children}
        </>
      )}
    </>
  );
}
