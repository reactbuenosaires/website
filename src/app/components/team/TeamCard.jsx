import Image from "next/image";
import style from "@/app/components/team/reactTeam.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function TeamCard({ name, username, image, networkUrl }) {
  return (
    <div className={style.team_members}>
      <Image
        className={style.image}
        src={image}
        width={80}
        alt={`Imagen de perfil de organizador ${name}`}
        height={80}
      />
      <div className={style.member_data}>
        <h5>{name}</h5>
        <div className={style.social_media_container}>
          <FontAwesomeIcon icon={faXTwitter} className={style.icon} />
          <a className={style.link} href={networkUrl} target="_blank">
            @{username}
          </a>
        </div>
      </div>
    </div>
  );
}
