import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Fetch all users
export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, username: true }, // Avoid sending passwords
  });
  return NextResponse.json(users);
}

// Add a new user
export async function POST(request: Request) {
  const { username, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { username, password: hashedPassword },
  });

  return NextResponse.json(newUser);
}
