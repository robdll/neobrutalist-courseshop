import styles from "../styles/Home.module.scss";
import Seo from "../components/Seo";
import AppNav from "../components/AppNav";
// import Search from "../components/Search";
// import Categories from "../components/Categories";
// import Featured from "../components/Featured";
// import Releases from "../components/Releases";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo />
      <main className={styles.main}>
        <AppNav />
        {/* 
        <Search />
        <Categories />
        <Featured />
        <Releases /> 
        */}
      </main>
      {/* 
        <AppFooter /> 
      */}
    </div>
  );
}
