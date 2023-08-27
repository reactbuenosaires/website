import hamburgerIcon from "@/app/assets/icons/hamburger.svg";
import style from "./MainHeader.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <>
      <div className={style.nav}>
        <Image src={hamburgerIcon} alt="Menu Icon" width={20} />
      </div>
    </>
  );
}
