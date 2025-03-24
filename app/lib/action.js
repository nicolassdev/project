"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "../auth";

// httpPOST
export const addUser = async (formData) => {
  "use server";
  const {
    username,
    password,
    fullname,
    gender,
    email,
    address,
    status,
    position,
  } = Object.fromEntries(formData);

  try {
    connectToDb(); // Ensure database connection

    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password

    const newUser = new User({
      username,
      password: hashedPassword,
      fullname,
      gender,
      email,
      address,
      status,
      position,
    });
    await newUser.save();
  } catch (error) {
    console.error("Error adding user:", error);
  }
  revalidatePath("/dashboard/employee");
  redirect("/dashboard/employee");
};

// httpPUT
export const updateUser = async (formData) => {
  "use server";
  const { id, fullname, gender, email, address, status, position } =
    Object.fromEntries(formData);

  try {
    connectToDb(); // Ensure database connection

    const updateFields = {
      fullname,
      gender,
      email,
      address,
      status,
      position,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === undefined || updateFields[key] === "") &&
        delete updateFields[key];
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.error("Failed to update user:", error);
  }
  revalidatePath("/dashboard/employee");
  redirect("/dashboard/employee");
};

//httpDELETE
export const deleteUser = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb(); // Ensure database connection
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error to delete user:", error);
  }
  revalidatePath("/dashboard/employee");
};

export const authenicate = async (formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    console.log("Lano ini ?!", signIn);
    console.log("Login successful!", response);
    redirect("/dashboard");
  } catch (error) {
    console.error("Error to authenticate:", error);
  }
};
