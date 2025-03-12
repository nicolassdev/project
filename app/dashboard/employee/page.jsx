"use client";
import { useState } from "react";
import styles from "@/app/ui/dashboard/employee/employee.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rodgen Apin",
      gender: "Male",
      email: "gen@gmail.com",
      address: "Legazpi City",
      status: "Part time",
      position: "Instructor",
      image: "/noavatar.png",
    },
  ]);

  // Function to delete an employee
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  // Function to add an employee
  const handleAdd = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: "New Employee",
      gender: "Female",
      email: "new@email.com",
      address: "Unknown City",
      status: "Full time",
      position: "Staff",
      image: "/noavatar.png",
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for employee.." />
        <button className={styles.addButton} onClick={handleAdd}>
          Add Employee
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Address</td>
            <td>Status</td>
            <td>Position</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className={styles.users}>
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {employee.name}
                </div>
              </td>
              <td className={styles.gender}>{employee.gender}</td>
              <td className={styles.email}>{employee.email}</td>
              <td className={styles.address}>{employee.address}</td>
              <td>
                <span className={`${styles.status} ${styles.partime}`}>
                  {employee.status}
                </span>
              </td>
              <td>{employee.position}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Employee;
