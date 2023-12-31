import React from "react";
import style from "./MainHeader.module.css";
import Image from "next/image";
import logo from "@/assets/React_en_Buenos_Aires_logo.png";

const MainHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.logo_container}>
        <Image src={logo} height={50} alt="Logo de la comunidad React en Buenos Aires"/>
      </div>
    </header>
  );
};

export default MainHeader;
