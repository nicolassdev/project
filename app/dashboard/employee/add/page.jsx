import { addUser } from "@/app/lib/action";
import React from "react";
import styles from "@/app/ui/dashboard/employee/addEmployee/addEmployee.module.css";

const AddEmployee = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        {/* user name  */}
        <input type="text" placeholder="Username" name="username" required />

        {/* password  */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        {/* Full name  */}
        <input type="text" placeholder="Full name" name="fullname" required />
        {/* Gender  */}
        <select name="gender" id="gender">
          <option value="general">Choose a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* Email  */}
        <input type="text" placeholder="Email address" name="email" required />
        {/* Address  */}
        <input type="text" placeholder="Address" name="address" required />
        {/* Status  */}
        <select name="status" id="status">
          <option value="general">Choose a status</option>
          <option value="parttime">Part time</option>
          <option value="fulltime">Full Time</option>
        </select>
        {/* Position  */}
        <input type="text" placeholder="Positon" name="position" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;
