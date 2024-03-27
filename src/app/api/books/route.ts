import prisma from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const books = await prisma.book.findMany({
    include: { author: true },
  });

  return NextResponse.json(books, { status: 200 });
}

export async function POST(request: Request) {
  const { title, authorId } = await request.json();

  if (!validatePayload(title, authorId)) {
    return new NextResponse("Invalid request", {
      status: 400,
    });
  }

  const book = await prisma.book.create({
    data: {
      title,
      authorId,
    },
  });

  return NextResponse.json(book, { status: 201 });
}

const validatePayload = (title: any, authorId: any) => {
  return (
    typeof title === "string" &&
    title.length > 0 &&
    typeof authorId === "string" &&
    authorId.length > 0
  );
};
