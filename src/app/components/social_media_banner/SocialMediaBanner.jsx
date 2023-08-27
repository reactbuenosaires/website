import style from "@/app/components/social_media_banner/SocialMediaBanner.module.css";
import instagram from "@/app/assets/icons/instagram.svg";
import youtube from "@/app/assets/icons/youtube.svg";
import twitter from "@/app/assets/icons/x-twitter.svg";
import meetUp from "@/app/assets/icons/meetup.svg";
import Image from "next/image";

const icons = [
  { name: "instagram", src: instagram },
  { name: "youtube", src: youtube },
  { name: "twitter", src: twitter },
  { name: "meetUp", src: meetUp },
];

export default function SocialMediaBanner() {
  return (
    <div className={style.social_media_container}>
      {icons.map((icon, index) => {
        return (
          <div className={style.icon_container} key={index}>
            <Image
              className={style.icon}
              src={icon.src}
              alt="text"
              width={18}
              height={18}
            />
          </div>
        );
      })}
    </div>
  );
}
