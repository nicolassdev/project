import { connectToDb } from "@/app/lib/utils";
import { User } from "@/app/lib/models";

export async function GET() {
  try {
    await connectToDb(); // Ensure DB connection

    // Fetch total employees
    const totalEmployees = await User.countDocuments();

    // Fetch new employees added in the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const newEmployees = await User.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    console.log("Total Employees from DB:", totalEmployees);
    console.log("New Employees from DB:", newEmployees);

    return new Response(
      JSON.stringify({
        totalEmployees,
        newEmployees,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch stats" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
