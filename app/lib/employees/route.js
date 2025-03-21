import { connectToDb } from "@/app/lib/utils";
import { User } from "@/app/lib/models";

export async function GET() {
  try {
    await connectToDb();
    const users = await User.find({});
    return Response.json({ users });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}
