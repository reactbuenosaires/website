import speaker from '../../../public/aboutImages/speaker.jpg'
import stage from '../../../public/aboutImages/conferenceRoom.jpg'
import people from '../../../public/aboutImages/people.jpg'
import code from '../../../public/aboutImages/code.jpg'
import Image from 'next/image'
import style from '../../../styles/about.module.css'


const images = [{description:'Speaker', src:speaker}, {description: 'Conference stage', src:stage}, {description: 'People in Meetup', src:people}, {description:'Code Screen', src:code}]
export default function AboutImages(){
     return(
        <div className={style.container}>
            {images.map((img, index)=>{
                return <div key={index}>
                    <Image className={style.img} src={img.src} alt={img.description} width={150} height={100}/>
                    </div>
            })}
        </div>
     )
}