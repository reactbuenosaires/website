import Title from "@/app/components/Title";
import CardProsopal from "@/app/components/proposal_sponsor/CardProposal";
import style from "@/app/components/proposal_sponsor/proposal.module.css";

export default function CallToAction(props) {
  return (
    <section className={style.proposal_container}>
      <Title titleDescription="IMPULSA LA COMUNIDAD" />
      <section className={style.text_tontainer}>
        <p className={style.text_Description}>
          ¡REACT BA somos todos y todos podemos participar!
        </p>
      </section>
      <CardProsopal />
    </section>
  );
}
