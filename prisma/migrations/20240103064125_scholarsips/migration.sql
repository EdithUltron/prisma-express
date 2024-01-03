/*
  Warnings:

  - Added the required column `date` to the `Scholarships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scholarships" ADD COLUMN     "date" DATE NOT NULL;

-- AlterTable
ALTER TABLE "SkillRating" ADD COLUMN     "years" TEXT;
