import style from "../proposal_sponsor/proposal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    icon: faHandshake,
    text: "Sponsor",
    description:
      "Contribuye con la comunidad desde tus espacios y con tu equipo",
    form_Link: "https://www.google.com/",
  },
  {
    icon: faMicrophone,
    text: "Speaker",
    description: "¿Tenés algo que decir? ¡Vení a contarnos!",
    form_Link: "https://www.google.com/",
  },
];

export default function ProposalSponsor(props) {
  return (
    <section className={style.container_cards}>
      {cards.map((card, index) => {
        return (
          <div className={style.card} key={index}>
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
      })}
    </section>
  );
}
