import React from "react";
import style from "./MainHeader.module.css";
import Image from "next/image";
import logo from "@/assets/React_en_Buenos_Aires_logo.png";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.logo_container}>
        <Link href={"/"}>
          <Image
            src={logo}
            height={50}
            alt="Logo de la comunidad React en Buenos Aires"
          />
        </Link>
      </div>
      {/* <Link href={"/sorteos"} className={style.giveaways_link}>
        Sorteos
      </Link> */}
    </header>
  );
};

export default MainHeader;
