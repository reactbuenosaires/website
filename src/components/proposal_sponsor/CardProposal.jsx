import style from "../proposal_sponsor/proposal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProposalSponsor({card}) {
  return (
    <div className={style.card}>
      <div className={style.description}>
        <div className={style.icon_container}>
          <FontAwesomeIcon icon={card.icon} className={style.icon} />
        </div>
        <p>{card.description}</p>
        <button className={style.action_button}>
          <a href={card.form_Link} target="blank">
            {card.text}
          </a>
        </button>
      </div>
    </div>
  );
}
