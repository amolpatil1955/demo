import User from "@/models/user";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    console.log("Please fill all the fields");
    
    return new NextResponse.json(
      { message: "Please fill all the fields" },
      { status: 400 }
    );
  }

  const exitingUser = await User.findOne({ email });
  if (exitingUser) {
      console.log("user already exists");
    return NextResponse.json({ message: "user already exists" }, { status: 400 });
  }

  const hashpassword = await bcrypt.hash(password, 10);
  const Create_NewUser = new User({
    name,
    email,
    password: hashpassword,
  });
  await Create_NewUser.save();
  console.log("User registered successfully");
  
  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 201 }
  );
  
}


export async function GET() {
  await connectDB()

  const Alluser = await User.find();
  return NextResponse.json({Alluser})

}