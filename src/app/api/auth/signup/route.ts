import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, institute, password } = await req.json();

    await connectToDatabase();

    // check if user already exists (same name + institute)
    const existingUser = await User.findOne({ name, institute });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, institute, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "Signup successful!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error signing up", error }, { status: 500 });
  }
}
