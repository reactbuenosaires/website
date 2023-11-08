import style from "@/components/social_media_banner/SocialMediaBanner.module.css";
import logo from "@/assets/React_en_Buenos_Aires_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMedia from "@/data/SocialMedia.js";
import Image from "next/image";
import Link from "next/link";

export default function SocialMediaBanner() {
  return (
    <section className={style.social_media_container}>
      <div className={style.logo_image_container}>
        <Link href={'/'}>
        <Image
          src={logo}
          height={65}
          alt="Logo de la comunidad React en Buenos Aires"
        />
        </Link>
      </div>
      <Link href={"/giveaways"} className={style.giveaways_link}>
          Sorteos
        </Link>
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
