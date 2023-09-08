import React from "react";
import style from "./MainFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialMedia = [
  {
    name: "meetup",
    icon: faMeetup,
    link: "https://www.meetup.com/es/react-en-buenos-aires",
  },
  {
    name: "youtube",
    icon: faYoutube,
    link: "https://www.youtube.com/@ReactJSBuenosAires",
  },
  { name: "twitter", icon: faXTwitter, link: "https://twitter.com/React_BA" },
  {
    name: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/reactbuenosaires",
  },
];

const MainFooter = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footer_section}>
        <p className={style.text}>Puedes encontrarnos en:</p>
        <div className={style.social_media_container}>
          {socialMedia.map((network, index) => (
            <div key={index}>
              <a href={network.link} target="blank">
                <FontAwesomeIcon icon={network.icon} className={style.social_media_icon} />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className={style.footer_text}>
        <p className={style.text}>Contactanos</p>
        <a href="mailto:reactjs.ba@gmail.com" className={style.mailto}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon}/>
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
