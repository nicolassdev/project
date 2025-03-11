"use client";
import React from "react";
import styles from "./employees.module.css";
import Image from "next/image";
const Employees = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest added Employees</h2>
      <table className={styles.table}>
        Employees
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Status</td>
            <td>Position</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.users}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Lester Sapaula
              </div>
            </td>
            <td className={`${styles.email}`}>lester@gmail.com</td>
            <td className={`${styles.address}`}>Legazpi City</td>
            <td>
              <span className={`${styles.status} ${styles.fulltime}`}>
                Full time
              </span>
            </td>
            <td>Teacher</td>
          </tr>

          <tr>
            <td>
              <div className={styles.users}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Paul Avelino
              </div>
            </td>
            <td className={`${styles.email}`}>john@gmail.com</td>
            <td className={`${styles.address}`}>Legazpi City</td>
            <td>
              <span className={`${styles.status} ${styles.fulltime}`}>
                Full time
              </span>
            </td>
            <td>Guard</td>
          </tr>

          <tr>
            <td>
              <div className={styles.users}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Rodgen Apin
              </div>
            </td>
            <td className={`${styles.email}`}>gen@gmail.com</td>
            <td className={`${styles.address}`}>Legazpi City</td>
            <td>
              <span className={`${styles.status} ${styles.partime}`}>
                Part time
              </span>
            </td>
            <td>Instructor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
