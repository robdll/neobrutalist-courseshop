import styles from "@styles/Home.module.scss";
import Seo from "@components/Seo";
import AppNav from "@components/AppNav";
import AppSearch from "@components/AppSearch";
import Categories from "@components/Categories";
import Featured from "@components/Featured";
import Release from "@components/Release";
import AppFooter from "@components/AppFooter";
import { useState } from "react";

export default function Home() {
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

  const filterByType = (type) => {
    let filtered = [...releases];
    if (type !== "All") {
      filtered = releases.filter((course) => course.category === type);
    }
    setCourses(filtered);
  };

  const filterByTitle = (title) => {
    title = title.toLowerCase();
    let filtered = [...releases].filter(
      (course) => course.title.toLowerCase().indexOf(title) > -1
    );
    setCourses(filtered);
  };

  return (
    <div className={styles.container}>
      <Seo />
      <AppNav />
      <main className={styles.main}>
        <AppSearch filterCb={(type) => filterByTitle(type)} />
        <Categories filterCb={(type) => filterByType(type)} />
        <div className={styles.sectionTitle}>Best-Selling of the week</div>
        <Featured />
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
