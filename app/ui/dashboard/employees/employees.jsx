"use client";
import React, { useEffect, useState } from "react";
import styles from "./employees.module.css";
import Image from "next/image";

const Employees = () => {
  const [users, setUsers] = useState([]); // Ensure it initializes as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/lib/employees"); // Replace with actual API route
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const sortedUsers = data?.users
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Descending order
          .slice(0, 5); // Limit to 5 users

        setUsers(sortedUsers || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Added Employees</h2>
      <table className={styles.table}>
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
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className={styles.users}>
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {user.fullname}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      user.status === "parttime"
                        ? styles.partime
                        : styles.fulltime
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{user.position}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
