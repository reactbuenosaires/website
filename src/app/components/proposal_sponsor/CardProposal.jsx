import sponsor from "@/app/assets/conferenceRoom.jpg";
import speaker from "@/app/assets/microphone.jpg";
import Image from "next/image";
import style from "../proposal_sponsor/proposal.module.css";
import Link from "next/link";

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
    description: "¿Tenés algo que decir?. ¡Vení a contarnos!",
    form_Link: "https://www.google.com/",
  },
];

export default function ProposalSponsor(props) {
  return (
    <section className={style.container_cards}>
      {images.map((card, index) => {
        return (
          <div className={style.card} key={index}>
            {/* <Image
              className={style.img_card}
              src={card.src}
              alt={images.alt}
              // width={300}
              // height={200}
            /> */}
            <div className={style.description}>
              <p>{card.description}</p>
              <a
                className={style.action_buttons}
                href={card.form_Link}
                target="blank"
              >
                {card.text}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
