import style from "@/app/components/social_media_banner/SocialMediaBanner.module.css";
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
  { name: "twitter", 
    src: twitter, 
    link: "https://twitter.com/React_BA" },
  {
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/reactbuenosaires",
  },
];

export default function SocialMediaBanner() {
  return (
    <section className={style.social_media_container}>
      {icons.map((icon, index) => {
        return (
          <div className={style.icon_container} key={index}>
            <a href={icon.link} target="blank">
              <Image
                className={style.icon}
                src={icon.src}
                alt="text"
                width={18}
                height={18}
                title={icon.name}
              />
            </a>
          </div>
        );
      })}
    </section>
  );
}
