import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { identifier, newPassword } = await req.json();

    await connectToDatabase();

    const user = await User.findOne({
      $or: [{ name: identifier }, { institute: identifier }],
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({ message: "Password reset successful!" });
  } catch (error) {
    return NextResponse.json({ message: "Error resetting password", error }, { status: 500 });
  }
}
