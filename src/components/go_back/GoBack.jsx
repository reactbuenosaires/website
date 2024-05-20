"use client";

import styles from "./GoBack.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()}>
        <FontAwesomeIcon icon={faCircleLeft} width={15} height={15} />{" "}
        <strong>Volver</strong>
      </button>
    </div>
  );
};

export default GoBack;
