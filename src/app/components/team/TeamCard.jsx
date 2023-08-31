import Image from "next/image"
import style from '@/app/components/team/reactTeam.module.css'
export default function TeamCard(props) {
    return (
        <div >
            <div className={style.teamMember}>
                <Image 
                  className={style.borderPic} 
                  src={props.urlPic} 
                  width={80} 
                  alt='text' 
                  height={80}
                />
                <div className={style.memberData}>
                      <h5>{props.name}</h5>
                      <p>{props.role}</p>
                        <Image 
                          className={style.icon}
                          src={props.networkUrl} 
                          alt='text' 
                          width={15} 
                          height={15} 
                        />
                </div>
            </div>
        </div>
    )
}