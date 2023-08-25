import sponsor from '../../../public/conferenceRoom.jpg';
import speaker from '../../../public/microphone.jpg';
import Image from 'next/image';
import style from '../components/proposal_sponsor/proposal.module.css'
import Boton from './Boton';

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
                        <Boton action={card.text} />
                    </div>
                })
            }
        </div>

    )
}