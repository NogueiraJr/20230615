/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEmail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserEmail" DROP CONSTRAINT "UserEmail_userId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserEmail";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersEmails" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UsersEmails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersEmails" ADD CONSTRAINT "UsersEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
