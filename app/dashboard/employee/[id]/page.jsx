"use cliet";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/dashboard/employee/singleEmployee/singleEmployee.module.css";
const SingleEmployee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Anthony Daen
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          {/* Full name  */}
          <label>Full name</label>
          <input type="text" placeholder="Full name" name="fullname" required />
          {/* Gender  */}
          <label>Gender</label>
          <select name="gender" id="gender">
            <option value="general">Choose a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/* Email  */}
          <label>Email</label>
          <input
            type="text"
            placeholder="Email address"
            name="email"
            required
          />
          {/* Address  */}
          <label>Address</label>
          <input type="text" placeholder="Address" name="address" required />
          {/* Status  */}
          <label>Status</label>
          <select name="status" id="status">
            <option value="general">Choose a status</option>
            <option value="parttime">Part time</option>
            <option value="fulltime">Full Time</option>
          </select>
          {/* Position  */}
          <label>Position</label>
          <input type="text" placeholder="Positon" name="position" required />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleEmployee;
