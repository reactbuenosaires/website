import Image from "next/image"
import style from '@/app/components/team/reactTeam.module.css'
export default function TeamCard(props) {
    return (
        <div >
            <div className={style.teamMember}>
                <Image className={style.borderPic} src={props.urlPic} width={50} alt='text' height={50} />
                <div className={style.memberData}>
                    <h5>{props.name}</h5>
                    <p>{props.role}</p>
                    <div>
                        <Image src={props.networkUrl} alt='text' width={15} height={15} />
                    </div>
                </div>
            </div>
        </div>
    )
}