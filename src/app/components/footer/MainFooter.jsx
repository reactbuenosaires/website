import React from "react";
import style from "./MainFooter.module.css";
import socialMedia from "@/app/data/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MainFooter = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footer_section}>
        <p className={style.text}>Puedes encontrarnos en:</p>
        <div className={style.social_media_container}>
          {socialMedia.map((network) => (
            <div key={network.title}>
              <a href={network.url} target="_blank">
                <FontAwesomeIcon
                  icon={network.icon}
                  className={style.social_media_icon}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className={style.footer_text}>
        <p className={style.text}>Contactanos</p>
        <a href="mailto:reactjs.ba@gmail.com" className={style.mailto}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          reactjs.ba@gmail.com
        </a>
      </section>
      <section className={style.copyrigth}>
        <p className={style.text}>© React Buenos Aires 2023</p>
      </section>
    </footer>
  );
};

export default MainFooter;
