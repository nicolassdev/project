"use client";
import { MdSupervisorAccount } from "react-icons/md";
import styles from "./card.module.css";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [totalEmployees, setTotalEmployees] = useState(null);
  const [newEmployees, setNewEmployees] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeStats = async () => {
      try {
        console.log("Fetching stats...");
        const response = await fetch("/api/employees/stats");

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log("API Data:", data);

        setTotalEmployees(data?.totalEmployees ?? 0);
        setNewEmployees(data?.newEmployees ?? 0);
      } catch (error) {
        console.error("Error fetching employee stats:", error);
        setError(error.message);
      }
    };

    fetchEmployeeStats();
  }, []);

  return (
    <div className={styles.container}>
      <MdSupervisorAccount size={30} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Employees</span>
        {error ? (
          <span className={styles.error}>Error loading data</span>
        ) : (
          <>
            <span className={styles.number}>
              {totalEmployees !== null ? totalEmployees : "Loading..."}
            </span>
            <span className={styles.detail}>
              <span className={styles.positive}>
                {newEmployees !== null ? newEmployees : "Loading..."}
              </span>{" "}
              New employees added this previous week
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
