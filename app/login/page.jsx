import styles from "@/app/ui/login/login.module.css";
import { authenicate } from "../lib/action";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenicate} className={styles.form}>
        <h1>EMPLOYEE PROFILING</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
