"use cliet";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/dashboard/employee/singleEmployee/singleEmployee.module.css";
import { fetchUserById } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";
const SingleEmployee = async ({ params }) => {
  const { id } = params;
  const user = await fetchUserById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.fullname}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          {/* employee id  */}
          <input type="hidden" value={user.id} name="id" />
          {/* Full name  */}
          <label>Full name</label>
          <input type="text" placeholder={user.fullname} name="fullname" />
          {/* Gender  */}
          <label>Gender</label>
          <select name="gender" value={user.gender} id="gender">
            <option value={user.gender}>Male</option>
            <option value={user.gender}>Female</option>
          </select>
          {/* Email  */}
          <label>Email</label>
          <input type="text" placeholder={user.email} name="email" />
          {/* Address  */}
          <label>Address</label>
          <input type="text" placeholder={user.address} name="address" />
          {/* Status  */}
          <label>Status</label>
          <select name="status" value={user.status} id="status">
            <option value={user.status}>Part time</option>
            <option value={user.status}>Full Time</option>
          </select>
          {/* Position  */}
          <label>Position</label>
          <input type="text" placeholder={user.position} name="position" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleEmployee;
