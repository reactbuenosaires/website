import Title from "@/app/components/Title"
import CardProsopal from "@/app/components/CardProposal"

export default function CallToAction(props) {
    return (
        <div>
            <Title titleDescription-='Impulsa la Comunidad' />
            <p className="text">
                ¡REACT BA somos todos y todos podemos participar!
            </p>
            <CardProsopal />
        </div>
    )
}
