import style from '@/app/components/proposal_sponsor/proposal.module.css'
export default function Btn(props) {
    return (
        <div className={style.btn}>
            {props.action}
        </div>
    )
}