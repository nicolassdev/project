"use cliet";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/employee/employee.module.css";
import Link from "next/link";
import Image from "next/image";

const Employee = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for employee.." />
        <Link href="/dashboard/employee/add">
          <button className={styles.addButton}>Add Employee</button>
        </Link>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.users}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.fullname}
                </div>
              </td>
              <td className={`${styles.gender}`}>{user.gender}</td>
              <td className={`${styles.email}`}> {user.email}</td>
              <td className={`${styles.address}`}>{user.address}</td>
              <td>
                <span className={`${styles.status} ${styles.partime}`}>
                  {user.status}
                </span>
              </td>
              <td>{user.position}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/employee/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Employee;
