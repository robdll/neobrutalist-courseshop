import styles from "@styles/Featured.module.scss";
import RoundBtn from "./RoundBtn";
import Image from "next/image";
import { useState } from "react";

export default function Featured({ isDetails }) {
  const handleEvent = (event) => {
    if (isDetails) {
      event.preventDefault();
    }
    if (event.type === "touchend") {
      console.log("redirect");
    }
  };

  return (
    <article
      className={styles.container}
      onTouchEnd={handleEvent}
      style={
        !isDetails
          ? {
              backgroundPositionY: `-50px`,
            }
          : {}
      }
    >
      {!isDetails && (
        <span className={styles.likeBtn}>
          <RoundBtn icon="/heart.svg"></RoundBtn>
        </span>
      )}
      <span className={styles.flexer}></span>

      {isDetails ? (
        <article className={styles.authorContainer}>
          <div className={styles.authorBox}>
            <span className={styles.avatar}></span>
            <span className={styles.infoAuthor}>Rob.dll</span>
          </div>
        </article>
      ) : (
        <article className={styles.infoBox}>
          <span className={styles.infoTitle}>Development 0 to Hero</span>
          <span className={styles.avatar}></span>
          <span className={styles.infoAuthor}>Rob.dll</span>
          <span className={styles.infoPrice}>$50.50</span>
        </article>
      )}
    </article>
  );
}
