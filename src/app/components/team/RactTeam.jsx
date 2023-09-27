import TeamCard from "@/app/components/team/TeamCard";
import facuProfileImg from "@/app/assets/team/Facu_facundozurdo.jpg";
import nanoProfileImg from "@/app/assets/team/Nano_nanovazquez__.jpg";
import nickyProfileImg from "@/app/assets/team/Nicky_naniitevez.png";
import mateProfileImg from "@/app/assets/team/Mateo_mateosilguero1.jpg";
import style from "@/app/components/team/reactTeam.module.css";
import Title from "@/app/components/Title";

const memberTeam = [
  {
    name: "Facundo Giuliani",
    username: "facundozurdo",
    image: facuProfileImg,
    networkUrl: "https://twitter.com/facundozurdo",
  },
  {
    name: "Mariano Vazquez",
    username: "nanovazquez__",
    image: nanoProfileImg,
    networkUrl: "https://twitter.com/nanovazquez__",
  },
  {
    name: "Nicole Tevez",
    username: "naniitevez",
    image: nickyProfileImg,
    networkUrl: "https://twitter.com/naniitevez",
  },
  {
    name: "Mateo Silguero",
    username: "mateosilguero1",
    image: mateProfileImg,
    networkUrl: "https://twitter.com/mateosilguero1",
  },
];

export default function ReactTeam() {
  return (
    <div className={style.team_container}>
      <Title titleDescription={"ORGANIZADORES"} />
      <div className={style.card_container}>
        {memberTeam.map((member, index) => {
          return (
            <TeamCard
              key={index}
              name={member.name}
              username={member.username}
              image={member.image}
              networkUrl={member.networkUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
