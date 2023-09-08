import TeamCard from "@/app/components/team/TeamCard";
import picMember from "@/app/assets/people.jpg";
import style from "@/app/components/team/reactTeam.module.css";
import Title from "@/app/components/Title";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const memberTeam = [
  {
    name: "Person1",
    role: "Role1",
    urlImage: picMember,
    network: faXTwitter,
  },
  {
    name: "Person2",
    role: "Role2",
    urlImage: picMember,
    network: faXTwitter,
  },
  {
    name: "Person3",
    role: "Role3",
    urlImage: picMember,
    network: faXTwitter,
  },
  {
    name: "Person4",
    role: "Role4",
    urlImage: picMember,
    network: faXTwitter,
  },
];

export default function ReactTeam(props) {
  return (
    <div className={style.team_container}>
      <Title titleDescription={"ORGANIZADORES"} />
      <div className={style.card_container}>
        {memberTeam.map((member, index) => {
          return (
            <TeamCard
              key={index}
              urlPic={member.urlImage}
              name={member.name}
              role={member.role}
              networkUrl={member.network}
              alt={member.role}
            />
          );
        })}
      </div>
    </div>
  );
}
