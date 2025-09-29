import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import User, { IUser } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, institute, password } = await req.json();

    // 🔹 Basic validation
    if (!name || !institute || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔹 Ensure DB connection
    await connectToDatabase();

    // 🔹 Check if user exists
    const existingUser: IUser | null = await User.findOne({ name, institute });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Create new user
    const newUser: IUser = new User({
      name,
      institute,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "Signup successful", user: { id: newUser._id, name, institute } },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
