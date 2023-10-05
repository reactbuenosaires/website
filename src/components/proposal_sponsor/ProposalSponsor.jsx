import Title from "@/components/Title";
import CardProposal from "@/components/proposal_sponsor/CardProposal";
import proposalCards from "@/data/ProposalCards";
import style from "@/components/proposal_sponsor/proposal.module.css";

export default function CallToAction() {
  return (
    <section className={style.proposal_container}>
      <Title titleDescription="IMPULSA LA COMUNIDAD" />
      <section className={style.text_container}>
        <p className={style.subtitle}>
          ¡A React en Buenos Aires la hacemos entre todos!
        </p>
        <p className={style.text_description}>
          En React BA, valoramos tus ideas y experiencia. ¿Tienes conocimientos
          que quieres compartir? Anímate a dar una charla!
        </p>
        <p className={style.text_description}>
          ¿O quizás estás interesado en apoyar a nuestra comunidad? Te invitamos
          a participar como Sponsor de una Meetup!
        </p>
      </section>
      <section className={style.container_cards}>
        {proposalCards.map((card, index) => (
          <CardProposal card={card} key={index} />
        ))}
      </section>
    </section>
  );
}
