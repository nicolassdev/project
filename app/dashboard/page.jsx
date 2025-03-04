import Card from "../ui/dashboard/card/card";
import Employees from "../ui/dashboard/employees/employees";
import Performance from "../ui/dashboard/performance/performance";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Employees />
        <Performance />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};
export default Dashboard;
