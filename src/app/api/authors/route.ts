import prisma from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const authors = await prisma.author.findMany({
    include: { books: true },
  });

  return NextResponse.json(authors, { status: 200 });
}

export async function POST(request: Request) {
  const { firstName, lastName } = await request.json();

  if (!validatePayload(firstName, lastName)) {
    return new NextResponse("Invalid request", {
      status: 400,
    });
  }

  const author = await prisma.author.create({
    data: { firstName, lastName },
  });

  return NextResponse.json(author, { status: 201 });
}

const validatePayload = (firstName: any, lastName: any) => {
  return (
    typeof firstName === "string" &&
    firstName.length > 0 &&
    typeof lastName === "string" &&
    lastName.length > 0
  );
};
