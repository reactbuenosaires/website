import sponsor from '@/app/assets/conferenceRoom.jpg';
import speaker from '@/app/assets/microphone.jpg';
import Image from 'next/image';
import style from '../components/proposal_sponsor/proposal.module.css'
import Link from 'next/link';

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
        <div className={style.container_cards}>
            {
                images.map((card, index) => {
                    return <div  key={index} >
                        
                        <Image
                          className={style.action_Card}
                          src={card.src}
                          alt={images.text}
                          width={400}
                          height={250}
                        />
                        <Link 
                          className={style.action_buttons}
                          href={'https://www.google.com/'}
                          target='blank'>
                            {card.text}
                        </Link>
                    </div>
                })
            }
        </div>

    )
}