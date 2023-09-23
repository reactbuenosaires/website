import Image from "next/image";
import style from "@/app/components/team/reactTeam.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function TeamCard(props) {
  return (
    <div className={style.team_members}>
      <Image
        className={style.image}
        src={props.urlPic}
        width={80}
        alt="text"
        height={80}
      />
      <div className={style.member_data}>
        <h5>{props.name}</h5>
        <div className={style.social_media_container}>
          <FontAwesomeIcon icon={faXTwitter} className={style.icon} />
          @twitter
        </div>
      </div>
    </div>
  );
}
