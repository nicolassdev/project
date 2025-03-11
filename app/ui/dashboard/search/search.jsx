import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch className={styles.iconsearch} />
        <input type="text" placeholder={placeholder} className={styles.input} />
      </div>
    </div>
  );
};

export default Search;
