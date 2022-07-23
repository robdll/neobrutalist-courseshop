import styles from "../styles/Featured.module.scss";
import RoundBtn from "./RoundBtn";
import Image from "next/image";
import { useState } from "react";

export default function Featured() {
  const handleEvent = (event) => {
    if (event.type === "touchend") {
      console.log("redirect");
    }
  };

  return (
    <article className={styles.container} onTouchEnd={handleEvent}>
      <span className={styles.likeBtn}>
        <RoundBtn icon="/heart.svg"></RoundBtn>
      </span>
      <span className={styles.flexer}></span>
      <article className={styles.infoBox}>
        <span className={styles.infoTitle}>Development 0 to Hero</span>
        <span className={styles.avatar}></span>
        <span className={styles.infoAuthor}>Rob.dll</span>
        <span className={styles.infoPrice}>$50.50</span>
      </article>
    </article>
  );
}
