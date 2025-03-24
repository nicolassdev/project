import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSettings,
  MdHelp,
  MdPeople,
  MdLogout,
  MdLocalActivity,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
// import { auth } from "@/app/auth";

const menuItems = [
  {
    title: "Employee Profiling",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Performance",
        path: "/dashboard/performance",
        icon: <MdLocalActivity />,
      },
      {
        title: "Employees  ",
        path: "/dashboard/employee",
        icon: <MdPeople />,
      },
    ],
  },

  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp />,
      },
      {
        title: "Logout",
        path: "/dashboard/logout",
        icon: <MdLogout />,
      },
    ],
  },
];

const Sidebar = async () => {
  // const session = await auth();
  // console.log(session);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt="Avatar"
            width={50}
            height={50}
          />
          <div className={styles.userDetail}>
            <span className={styles.userName}>Anthony Daen</span>
            <span className={styles.userRole}>Administrator</span>
          </div>
        </div>
        <ul className={styles.list}>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
