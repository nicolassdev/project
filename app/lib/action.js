import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

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

    // Hash the password
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
