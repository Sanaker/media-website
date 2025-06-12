import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  // Extracting the dynamic ID from the URL using request.url
  const url = new URL(request.url);
  const id = url.pathname.split("/")[3]; // Assuming URL looks like /api/users/{id}

  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}