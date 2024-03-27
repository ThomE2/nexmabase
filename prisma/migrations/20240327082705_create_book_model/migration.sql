-- CreateTable
CREATE TABLE "Book" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
