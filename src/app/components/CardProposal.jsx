import sponsor from '../../../public/conferenceRoom.jpg';
import speaker from '../../../public/microphone.jpg';
import Image from 'next/image';
import style from '../../../styles/proposal.module.css'
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

export default function ProposalSponsor(props) {
    return (
        <div>
            {
                images.map((card, index) => {
                    return <div  key={index} className={style.action_Card}>
                        <Image src={card.src} alt='text' width={150} />
                        <Btn action={card.text} />
                    </div>
                })
            }
        </div>

    )
}