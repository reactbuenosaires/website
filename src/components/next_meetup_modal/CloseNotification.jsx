"use client";

import { useState } from "react";
import style from "./notification.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function CloseNotification({ children }) {
  const [isDisplay, setIsDisplay] = useState(true);

  return (
    <>
      {isDisplay && (
        <section className={style.notification}>
          <div className={style.icon_container}>
            <FontAwesomeIcon
              icon={faX}
              className={style.close_icon}
              onClick={() => setIsDisplay(false)}
              title="Cerrar"
            />
          </div>
          {children}
        </section>
      )}
    </>
  );
}
