import speaker from '../../../public/aboutImages/speaker.jpg'
import stage from '../../../public/aboutImages/conferenceRoom.jpg'
import people from '../../../public/aboutImages/people.jpg'
import code from '../../../public/aboutImages/code.jpg'
import Image from 'next/image'
import style from '../../../styles/about.module.css'


const images = [{ description: 'Speaker', src: speaker, text: '+30 Speakers' }, { description: 'Conference stage', src: stage, text: '+80 Eventos' }, { description: 'People in Meetup', src: people, text: '+7000 Miembros' }, { description: 'Code Screen', src: code, text: '+30h Contenido' }]
export default function AboutImages() {
    return (
        <div className={style.container}>
            {images.map((img, index) => {
                return <div className={style.card} key={index}>
                    <Image className={style.img} src={img.src} alt='text' width={150} height={100} />
                    <p className={style.container_text}>{img.text}</p>
                </div>
            })}
        </div>
    )
}