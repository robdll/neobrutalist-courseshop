import styles from "@styles/Search.module.scss";
import RoundBtn from "@components/RoundBtn";
import { useState } from "react";

export default function AppSearch({ filterCb }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterCb(e.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <RoundBtn icon="/lens.svg" bordered="true" />
      <input
        className={styles.input}
        type="text"
        placeholder="What course do you want?"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
