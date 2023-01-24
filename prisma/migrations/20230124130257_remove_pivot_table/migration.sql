/*
  Warnings:

  - You are about to drop the `UpdateUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UpdateUser" DROP CONSTRAINT "UpdateUser_updateId_fkey";

-- DropForeignKey
ALTER TABLE "UpdateUser" DROP CONSTRAINT "UpdateUser_userId_fkey";

-- DropTable
DROP TABLE "UpdateUser";
