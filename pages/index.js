import styles from "../styles/Home.module.scss";
import Seo from "../components/Seo";
import AppNav from "../components/AppNav";
import AppSearch from "../components/AppSearch";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
// import Releases from "../components/Releases";

export default function Home() {
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
        {/* 
        
        <Releases /> 
        */}
      </main>
      {/* 
        <AppFooter /> 
      */}
    </div>
  );
}
