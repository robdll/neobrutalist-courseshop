import styles from "../styles/Home.module.scss";
import Seo from "../components/Seo";
import AppNav from "../components/AppNav";
import AppSearch from "../components/AppSearch";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import Release from "../components/Release";
import AppFooter from "../components/AppFooter";

export default function Home() {
  const releases = [
    { title: "UX Foundation", price: "$59.99" },
    { title: "Science of Color", price: "$24.99" },
  ];
  return (
    <div className={styles.container}>
      <Seo />
      <main className={styles.main}>
        <AppNav />
        <AppSearch />
        <Categories />
        <span className={styles.sectionTitle}>Best-Selling of the week</span>
        <Featured />
        <div className={styles.releasesHeader}>
          <span className={styles.sectionTitle}>New Releases</span>
          <span className={styles.link}>See All</span>
        </div>
        <section className={styles.releases}>
          {releases.map((release, idx) => {
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
