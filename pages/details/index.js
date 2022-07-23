import styles from "@styles/Home.module.scss";
import Seo from "@components/Seo";
import AppNav from "@components/AppNav";
import Featured from "@components/Featured";
import Release from "@components/Release";
import AppFooter from "@components/AppFooter";
import { useState } from "react";

export default function Details() {
  const releases = [
    { title: "UX Foundation", price: "$59.99", category: "Design" },
    { title: "Science of Color", price: "$24.99", category: "Design" },
    { title: "Web Development", price: "$99.99", category: "Development" },
    { title: "React Advanced", price: "$99.99", category: "Development" },
    { title: "Marketing Easy", price: "$19.99", category: "Marketing" },
    { title: "Seo for dummy", price: "$14.99", category: "Marketing" },
    { title: "Canon Vs Nikon", price: "$9.99", category: "Photography" },
    { title: "Lights and Frame", price: "$9.99", category: "Photography" },
    { title: "Storylogue Techniques", price: "$24.99", category: "Writing" },
    { title: "Self-Publishing Tips", price: "$9.99", category: "Writing" },
  ];

  const [courses, setCourses] = useState([...releases]);

  return (
    <div className={styles.container}>
      <Seo />
      <main className={styles.main}>
        <AppNav isDetails={true} />
        <Featured isDetails={true} />
        <div className={styles.releasesHeader}>
          <span className={styles.sectionTitle}>New Releases</span>
          <span className={styles.link}>See All</span>
        </div>
        <section className={styles.releases}>
          {courses.map((release, idx) => {
            return (
              <Release key={idx} title={release.title} price={release.price} />
            );
          })}
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
