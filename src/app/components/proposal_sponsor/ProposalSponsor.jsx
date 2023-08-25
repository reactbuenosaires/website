import Title from "@/app/components/Title"
import style from '@/app/components/proposal_sponsor/proposal.module.css'
import CardProsopal from "@/app/components/CardProposal"

export default function CallToAction(props) {
    return (
        <div>
            <Title title='Impulsa la Comunidad' />
            <p className={style.text}>
                ¡REACT BA somos todos y todos podemos participar!
            </p>
            <CardProsopal />
        </div>
    )
}
