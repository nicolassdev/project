import styles from "@/app/ui/dashboard/employee/employee.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Employee = () => {
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
            <td className={`${styles.gender}`}>Male</td>
            <td className={`${styles.email}`}>gen@gmail.com</td>
            <td className={`${styles.address}`}>Legazpi City</td>
            <td>
              <span className={`${styles.status} ${styles.partime}`}>
                Part time
              </span>
            </td>
            <td>Instructor</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/employee/test">
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
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Employee;
