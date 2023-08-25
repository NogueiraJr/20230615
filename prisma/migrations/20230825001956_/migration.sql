-- CreateTable
CREATE TABLE "Menus" (
    "id" TEXT NOT NULL,
    "seq" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Systems" (
    "id" TEXT NOT NULL,
    "seq" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Systems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modules" (
    "id" TEXT NOT NULL,
    "seq" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemMenuModule" (
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "systemId" TEXT,
    "menuId" TEXT,
    "moduleId" TEXT,

    CONSTRAINT "SystemMenuModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSystemMenuModule" (
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "systemMenuModuleId" TEXT NOT NULL,

    CONSTRAINT "UserSystemMenuModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "userTypeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referenceId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmails" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userEmailTypeId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEmails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmailTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEmailTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPhones" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userPhoneTypeId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPhones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPhoneTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPhoneTypes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Menus_id_key" ON "Menus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Systems_id_key" ON "Systems"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Modules_id_key" ON "Modules"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SystemMenuModule_id_key" ON "SystemMenuModule"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserTypes_id_key" ON "UserTypes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserEmailTypes_id_key" ON "UserEmailTypes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserPhoneTypes_id_key" ON "UserPhoneTypes"("id");

-- AddForeignKey
ALTER TABLE "SystemMenuModule" ADD CONSTRAINT "SystemMenuModule_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "Systems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemMenuModule" ADD CONSTRAINT "SystemMenuModule_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemMenuModule" ADD CONSTRAINT "SystemMenuModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSystemMenuModule" ADD CONSTRAINT "UserSystemMenuModule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSystemMenuModule" ADD CONSTRAINT "UserSystemMenuModule_systemMenuModuleId_fkey" FOREIGN KEY ("systemMenuModuleId") REFERENCES "SystemMenuModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userEmailTypeId_fkey" FOREIGN KEY ("userEmailTypeId") REFERENCES "UserEmailTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPhones" ADD CONSTRAINT "UserPhones_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPhones" ADD CONSTRAINT "UserPhones_userPhoneTypeId_fkey" FOREIGN KEY ("userPhoneTypeId") REFERENCES "UserPhoneTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
