import GiveawaysIcon from "../../data/GiveawayButtons";

export default function GiveawaysButtons() {
  return (
    <>
      {GiveawaysIcon.map((index, buttons) => {
        <div key={index}>
          <span>Hola</span>
          <span>{buttons.icon}</span>
        </div>;
      })}
    </>
  );
}
