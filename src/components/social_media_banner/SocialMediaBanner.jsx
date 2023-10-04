import style from "@/components/social_media_banner/SocialMediaBanner.module.css";
import logo from "@/app/assets/React_en_Buenos_Aires_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMedia from "@/app/data/SocialMedia.js";
import Image from "next/image";

export default function SocialMediaBanner() {
  return (
    <section className={style.social_media_container}>
      <div className={style.logo_image_container}>
        <Image
          src={logo}
          height={65}
          alt="Logo de la comunidad React en Buenos Aires"
        />
      </div>
      <div className={style.network_icons_container}>
        {socialMedia.map((network) => (
          <div className={style.icon_container} key={network.title}>
            <a
              href={network.url}
              target="_blank"
              title={`Visita nuestro ${network.title}`}
            >
              <FontAwesomeIcon icon={network.icon} className={style.icon} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
