import Title from "./components/Title"
import style from '../../styles/main.module.css'
import CardAction from "./components/CardAction"
export default function CallToAction(props) {
    return(
        <div>
            <Title title='Impulsda la Comunidad'/>
            <p className={style.text}>
                ¡REACT BA somos todos y todos podemos participar!
            </p>
            <CardAction/>
        </div>
    )
}
