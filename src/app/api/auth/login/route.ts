import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await connectToDatabase();

    const user = await User.findOne({
      $or: [{ name: email }, { institute: email }],
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });
    }

    return NextResponse.json({
      message: "Login successful!",
      user: { name: user.name, institute: user.institute },
    });
  } catch (error: unknown) {
    console.error("Login error:", error);

    // Safely extract message
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ message: "Error logging in", error: message }, { status: 500 });
  }
}
