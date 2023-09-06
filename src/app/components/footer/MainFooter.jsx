import React from "react";
import style from "./MainFooter.module.css";
import instagram from "@/app/assets/icons/instagram.svg";
import youtube from "@/app/assets/icons/youtube.svg";
import twitter from "@/app/assets/icons/x-twitter.svg";
import meetUp from "@/app/assets/icons/meetup.svg";
import Image from "next/image";

const icons = [
  {
    name: "meetup",
    src: meetUp,
    link: "https://www.meetup.com/es/react-en-buenos-aires",
  },
  {
    name: "youtube",
    src: youtube,
    link: "https://www.youtube.com/@ReactJSBuenosAires",
  },
  { name: "twitter", src: twitter, link: "https://twitter.com/React_BA" },
  {
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/reactbuenosaires",
  },
];

const MainFooter = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footer_section}>
        <p className={style.text}>Siguenos en nuestras redes</p>
        <div className={style.social_media_container}>
          {icons.map((icon, index) => (
            <div key={index}>
              <a href={icon.link} target="blank">
                <Image
                  className={style.icon}
                  src={icon.src}
                  alt="text"
                  width={25}
                  height={25}
                  title={icon.name}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className={style.footer_text}>
        <p className={style.text}>Contactanos</p>
        <a href="mailto:reactjs.ba@gmail.com" className={style.mailto}>reactjs.ba@gmail.com</a>
      </section>
      {/* <section className={style.social_media_section}>
        <p className={style.text}>Siguenos en nuestras redes</p>
        <ul className={style.social_media_container}>
          {icons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="blank">
                <Image
                  className={style.icon}
                  src={icon.src}
                  alt="text"
                  width={25}
                  height={25}
                  title={icon.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className={style.section}>
        <p className={style.text}>Contactanos</p>
        <a href="mailto:reactjs.ba@gmail.com">reactjs.ba@gmail.com</a>
      </section>
      <section className={style.copyrigth}>
        <p className={style.text}>Copyright section</p>
      </section> */}
      <section className={style.copyrigth}>
        <p className={style.text}>Copyright section</p>
      </section>
    </footer>
  );
};

export default MainFooter;
