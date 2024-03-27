/*
  Warnings:

  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "authorId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "Author" (
    "id" UUID NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_firstName_lastName_key" ON "Author"("firstName", "lastName");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
