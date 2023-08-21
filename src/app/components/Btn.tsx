import style from '../../../styles/callToAction.module.css'
export default function Btn(props) {
    return(
        <div className={style.btn}>
            {props.action}
        </div>
    )
}