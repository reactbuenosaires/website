import Title from "@/app/components/Title";
import CardProposal from "@/app/components/proposal_sponsor/CardProposal";
import style from "@/app/components/proposal_sponsor/proposal.module.css";
import { faHandshake, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    icon: faHandshake,
    text: "Sponsor",
    description:
      "Contribuye con la comunidad desde tus espacios y con tu equipo",
    form_Link: "https://forms.gle/p1jTQdd3JdeAdCnU7",
  },
  {
    icon: faMicrophone,
    text: "Speaker",
    description: "¿Tenés algo que decir? ¡Vení a contarnos!",
    form_Link:  "https://forms.gle/4Tasp2yGpwx9EgY38",
  },
];

export default function CallToAction(props) {
  return (
    <section className={style.proposal_container}>
      <Title titleDescription="IMPULSA LA COMUNIDAD" />
      <section className={style.text_container}>
        <p className={style.text_description}>
          ¡REACT BA somos todos y todos podemos participar!
        </p>
      </section>
      <section className={style.container_cards}>
        {cards.map((card, index) => (
          <CardProposal card={card} key={index} />
        ))}
      </section>
    </section>
  );
}
