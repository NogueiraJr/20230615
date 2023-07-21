/*
  Warnings:

  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_userId_fkey";

-- DropTable
DROP TABLE "Email";

-- CreateTable
CREATE TABLE "UserEmail" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserEmail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserEmail" ADD CONSTRAINT "UserEmail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
