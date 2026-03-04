/*
  Warnings:

  - You are about to drop the column `categoryId` on the `TutorProfile` table. All the data in the column will be lost.
  - Added the required column `category` to the `TutorProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TutorProfile" DROP CONSTRAINT "TutorProfile_categoryId_fkey";

-- AlterTable
ALTER TABLE "TutorProfile" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT NOT NULL;
