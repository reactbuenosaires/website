import Image from "next/image";
import style from "../proposal_sponsor/proposal.module.css";
import speaker from "@/app/assets/icons/microphone.svg";
import sponsor from "@/app/assets/icons/handshake.svg";

const images = [
  {
    alt: "Conference Room",
    src: sponsor,
    text: "Sponsor",
    description:
      "Contribuye con la comunidad desde tus espacios y con tu equipo",
    form_Link: "https://www.google.com/",
  },
  {
    alt: "Speaker Microphone",
    src: speaker,
    text: "Speaker",
    description: "¿Tenés algo que decir? ¡Vení a contarnos!",
    form_Link: "https://www.google.com/",
  },
];

export default function ProposalSponsor(props) {
  return (
    <section className={style.container_cards}>
      {images.map((card, index) => {
        return (
          <div className={style.card} key={index}>
            <div className={style.description}>
              <div className={style.icon_container}>
                <Image className={style.icon} src={card.src} alt={images.alt} />
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
