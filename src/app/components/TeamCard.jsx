import Image from "next/image"
import style from '../../../styles/reactTeam.module.css'
import person from '../../../public/aboutImages/people.jpg'
export default function TeamCard(props) {
    return (
        <div >
            <div className={style.teamMember}>
                <Image className={style.borderPic} src={props.urlPic} width={50} alt={props.description} height={50} />
                <div className={style.memberData}>
                    <h5>{props.name}</h5>
                    <p>{props.role}</p>
                    <div>
                        <Image src={props.networkUrl} alt={props.description} width={15} height={15} />
                    </div>
                </div>
            </div>
        </div>
    )
}