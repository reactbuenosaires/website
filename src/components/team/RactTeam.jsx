import TeamCard from "@/components/team/TeamCard";
import teamNetworks from "@/app/data/TeamNetworks.js";
import style from "@/components/team/reactTeam.module.css";
import Title from "@/components/Title";

export default function ReactTeam() {
  return (
    <section className={style.team_container}>
      <Title titleDescription={"ORGANIZADORES"} />
      <section className={style.cards_container}>
        {teamNetworks.map((member, index) => {
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
      </section>
    </section>
  );
}
