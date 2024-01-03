-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "entrepreneurId" TEXT;

-- CreateTable
CREATE TABLE "Entrepreneur" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "regNo" TEXT,
    "funded" BOOLEAN NOT NULL,
    "org" TEXT,
    "other" TEXT,
    "date" DATE NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entrepreneur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Placements" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "compantContact" TEXT NOT NULL,
    "packageInLakhs" TEXT NOT NULL,
    "internship" BOOLEAN NOT NULL,
    "dateOfJoin" DATE NOT NULL,
    "accept" BOOLEAN NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Placements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_entrepreneurId_fkey" FOREIGN KEY ("entrepreneurId") REFERENCES "Entrepreneur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
