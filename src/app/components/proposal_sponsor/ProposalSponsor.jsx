import Title from "@/app/components/Title"
import CardProsopal from "@/app/components/proposal_sponsor/CardProposal"
import style from '@/app/components/proposal_sponsor/proposal.module.css'

export default function CallToAction(props) {
    return (
        <div>
            <Title titleDescription='IMPULSA LA COMUNIDAD' />
            <p className={style.text_Description}>
                ¡REACT BA somos todos y todos podemos participar!
            </p>
            <CardProsopal />
        </div>
    )
}
