/*
  Warnings:

  - A unique constraint covering the columns `[name,studentId,departmentId]` on the table `Semester` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `Semester` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "hmType" AS ENUM ('HONORS', 'MINORS');

-- DropIndex
DROP INDEX "Semester_name_studentId_key";

-- AlterTable
ALTER TABLE "Semester" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "honorsOrMinors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "type" "hmType",
    "place" TEXT,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "grades" TEXT NOT NULL,
    "program" "EducationType",
    "board" TEXT,
    "fieldOfStudy" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "honorsOrMinors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "honorsOrMinors_studentId_idx" ON "honorsOrMinors"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "honorsOrMinors_startDate_instituteName_studentId_key" ON "honorsOrMinors"("startDate", "instituteName", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Semester_name_studentId_departmentId_key" ON "Semester"("name", "studentId", "departmentId");

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "honorsOrMinors" ADD CONSTRAINT "honorsOrMinors_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
