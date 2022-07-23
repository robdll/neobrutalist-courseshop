import styles from "@styles/Home.module.scss";
import Seo from "@components/Seo";
import AppNav from "@components/AppNav";
import Featured from "@components/Featured";
import Release from "@components/Release";
import AppFooter from "@components/AppFooter";
import { useState } from "react";

export default function Details() {
  const lessons = [
    { title: "Intro to Html", price: "159min 22sec" },
    { title: "Basic CSS", price: "24min 45sec" },
    { title: "Javascript Foundamental", price: "59min 18sec" },
    { title: "Creating a website", price: "25min 12sec" },
  ];

  return (
    <div className={styles.container}>
      <Seo />
      <main className={styles.main}>
        <AppNav isDetails={true} />
        <Featured isDetails={true} />
        <div className={styles.releasesHeader}>
          <span className={styles.sectionTitle}>
            Learn Development with Rob.dll
          </span>
        </div>
        <p className={styles.courseDescription}>
          This Course is beginner friendly and teach you all you need to become
          a full stack developer in no time.....<span>Read More</span>
        </p>
        <section className={styles.releases}>
          {lessons.map((lesson, idx) => {
            return (
              <Release
                key={idx}
                title={lesson.title}
                price={lesson.price}
                isLesson={true}
              />
            );
          })}
        </section>
      </main>
      <AppFooter isDetails={true} />
    </div>
  );
}
