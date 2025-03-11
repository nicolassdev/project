import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 3 minutes to learn</span>
          <p className={styles.desc}>
            An Employee Profiling Dashboard is a comprehensive digital platform
            designed to manage and display detailed employee information within
            an organization.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            Upcoming Features for Employee Profiling Dashboard
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Exciting new features are coming soon to the Employee Profiling
            Dashboard to enhance functionality and improve user experience. The
            upcoming update will include advanced search and filter options,
            allowing users to easily find employee information based on specific
            criteria such as department, role, or employment status.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
