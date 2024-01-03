-- CreateEnum
CREATE TYPE "resultStatus" AS ENUM ('PASS', 'FAIL', 'ABSENT');

-- CreateTable
CREATE TABLE "Semester" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "semesterNumber" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "credits" TEXT NOT NULL,
    "status" "resultStatus" NOT NULL,
    "gradePoints" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Semester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "subjectCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "resultStatus" NOT NULL,
    "credits" TEXT NOT NULL,
    "gradePoints" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "semesterId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Semester_name_studentId_key" ON "Semester"("name", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subjectCode_key" ON "Subject"("subjectCode");

-- CreateIndex
CREATE INDEX "Subject_subjectCode_idx" ON "Subject"("subjectCode");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_studentId_semesterId_key" ON "Subject"("studentId", "semesterId");

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
