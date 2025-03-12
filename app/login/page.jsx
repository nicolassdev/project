import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>EMPLOYEE PROFILING</h1>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
