import { connectToDb } from "@/app/lib/utils";
import { User } from "@/app/lib/models";

export async function GET() {
  try {
    await connectToDb();

    const totalEmployees = await User.countDocuments();
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    const newEmployees = await User.countDocuments({
      createdAt: { $gte: lastWeek },
    });

    return Response.json({ totalEmployees, newEmployees });
  } catch (error) {
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
