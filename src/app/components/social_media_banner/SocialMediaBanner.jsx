import style from "@/app/components/social_media_banner/SocialMediaBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

export default function SocialMediaBanner() {
  return (
    <section className={style.social_media_container}>
      {socialMedia.map((network, index) => {
        return (
          <div className={style.icon_container} key={index}>
            <a href={network.link} target="blank">
              <FontAwesomeIcon icon={network.icon} className={style.icon} />
            </a>
          </div>
        );
      })}
    </section>
  );
}
