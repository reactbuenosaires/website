import style from '../../../styles/proposal.module.css'
export default function Btn(props) {
    return (
        <div className={style.btn}>
            {props.action}
        </div>
    )
}