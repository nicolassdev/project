import { MdSupervisorAccount } from "react-icons/md";
import styles from "./card.module.css";
import React from "react";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisorAccount size={30} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>50</span>
        <span className={styles.detail}>
          <span className={styles.positive}>5</span> New employee added this
          previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
