import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Employeee Profiling</div>
      <div className={styles.text}>
        &copy; 2024 Computer Systems Institute | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
