import style from "@/app/components/social_media_banner/SocialMediaBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMedia from "@/app/data/SocialMedia.js";

export default function SocialMediaBanner() {
  return (
    <section className={style.social_media_container}>
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
    </section>
  );
}
