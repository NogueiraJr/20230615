/*
  Warnings:

  - You are about to drop the `UserType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_userTypeId_fkey";

-- DropTable
DROP TABLE "UserType";

-- CreateTable
CREATE TABLE "UserTypes" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UserTypes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTypes_type_key" ON "UserTypes"("type");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
