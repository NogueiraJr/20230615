-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmails" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEmails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTypes" (
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UserTypes_pkey" PRIMARY KEY ("type")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTypes_type_key" ON "UserTypes"("type");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_type_fkey" FOREIGN KEY ("type") REFERENCES "UserTypes"("type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
