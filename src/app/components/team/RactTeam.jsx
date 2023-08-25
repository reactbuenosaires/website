import TeamCard from "../TeamCard";
import picMember from '../../../../public/people.jpg'
import network1 from '../../../../public/x-twitter.svg'
import style from '@/app/components/team/reactTeam.module.css'   
import Title from '@/app/components/Title'

const memberTeam = [
    {
        name: 'Person1',
        role: 'Role1',
        urlImage: picMember,
        network: network1
    },
    {
        name: 'Person2',
        role: 'Role2',
        urlImage: picMember,
        network: network1
    },
    {
        name: 'Person3',
        role: 'Role3',
        urlImage: picMember,
        network: network1
    },
    {
        name: 'Person4',
        role: 'Role4',
        urlImage: picMember,
        network: network1
    }
]

export default function ReactTeam(props) {
    return (
        <div className={style.teamComponent}>
            <Title title={'Organizadores'} />

            <div className={style.teamCard}>
                {memberTeam.map((member, index) => {
                    return <div key={index}>
                        <TeamCard urlPic={member.urlImage} name={member.name} role={member.role} networkUrl={member.network} alt={member.role} />
                    </div>
                })}
            </div>
        </div>
    )
}