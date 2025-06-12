import bcrypt from "bcryptjs";
import db from "../../../lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if the user already exists
  const existingUser = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (existingUser) {
    return new Response("User already exists", { status: 400 });
  }

  // Create the user in the database
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newUser = await db.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  return new Response("User registered successfully", { status: 200 });
}
