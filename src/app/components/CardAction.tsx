import sponsor from '../../../public/aboutImages/conferenceRoom.jpg';
import speaker from '../../../public/microphone.jpg';
import Image from 'next/image';
import style from '../../../styles/callToAction.module.css'
import Btn from './Btn';

const images = [
    {
        description: 'Conference Room',
        src: sponsor,
        text: 'Sponsor'
    },
    {
        description: 'Speaker Microphone',
        src: speaker,
        text: 'Speaker'
    }
]

export default function CardAction(props) {
    return (
        <div>
            {
                images.map((card) => {
                    return <div className={style.action_Card}>
                        <Image src={card.src} alt={card.description} width={150} />
                        <Btn action={card.text} />
                    </div>
                })
            }
        </div>

    )
}