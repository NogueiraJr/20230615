/*
  Warnings:

  - You are about to drop the `UsersEmails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersEmails" DROP CONSTRAINT "UsersEmails_userId_fkey";

-- DropTable
DROP TABLE "UsersEmails";

-- CreateTable
CREATE TABLE "UserEmails" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserEmails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
