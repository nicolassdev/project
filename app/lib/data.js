import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  // off limit  of information in  table employees
  const ITEM_PER_PAGE = 5;

  try {
    connectToDb();
    const count = await User.countDocuments({ fullname: { $regex: regex } });
    const users = await User.find({ fullname: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

// FETCH USER DETAILS
export const fetchUserById = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
