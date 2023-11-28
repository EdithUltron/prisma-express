-- CreateEnum
CREATE TYPE "bloodGroup" AS ENUM ('O_POS', 'O_NEG', 'A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'OTHER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Religion" AS ENUM ('HINDUISM', 'ISLAM', 'CRISTIANITY', 'SIKHISM', 'BUDDHISM', 'JAINISM', 'OTHER');

-- CreateEnum
CREATE TYPE "experienceType" AS ENUM ('JOB', 'INTERNSHIP', 'APPRENTICESHIP', 'OTHER');

-- CreateEnum
CREATE TYPE "experienceMode" AS ENUM ('ONSITE', 'REMOTE', 'HYBRID');

-- CreateEnum
CREATE TYPE "Socials" AS ENUM ('PERSONAL_WEBSITE', 'LINKEDIN', 'YOUTUBE', 'TWITTER', 'DISCORD', 'FACEBOOK', 'INSTAGRAM', 'BLOG');

-- CreateEnum
CREATE TYPE "achievementType" AS ENUM ('HONOR', 'AWARD');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'FACULTY', 'BRANCH_ADMIN', 'EXAM_ADMIN', 'ADMINISTRATION_ADMIN', 'REGISTRAR', 'PRINCIPAL', 'VICE_CHANCELLOR', 'ALUMNI_ADMIN', 'CERTIFICATE_ADMIN', 'SUPERADMIN', 'STAFF');

-- CreateTable
CREATE TABLE "studentRegister" (
    "id" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "studentPhone" TEXT NOT NULL,
    "dob" DATE,
    "firstName" TEXT,
    "lastName" TEXT,
    "branchId" TEXT,
    "reservationCategoryId" TEXT,
    "bloodGroup" "bloodGroup",
    "gender" "Gender",
    "communityId" TEXT,
    "annualIncome" TEXT,
    "address" TEXT,
    "religion" "Religion",
    "nationalityId" TEXT,
    "fatherName" TEXT,
    "fatherOccupation" TEXT,
    "fatherPhone" TEXT,
    "isRegistered" BOOLEAN DEFAULT false,
    "admissionExamsId" TEXT,
    "rank" TEXT,
    "programId" TEXT,
    "permanentAddress" TEXT,
    "studentAadhaar" TEXT,
    "yearOfAdmission" TEXT,
    "motherAadhaar" TEXT,
    "fatherAadhaar" TEXT,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentRegister_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "studentRegisterId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rollNumber" TEXT DEFAULT 'not-assigned',
    "about" TEXT,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "slugLine" TEXT,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" TEXT NOT NULL,
    "communityName" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nationality" (
    "id" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "Nationality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admissionExams" (
    "id" TEXT NOT NULL,
    "examName" TEXT NOT NULL,

    CONSTRAINT "admissionExams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "programName" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "et" "experienceType" NOT NULL,
    "mode" "experienceMode" NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,
    "icon" TEXT,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Volunteering" (
    "id" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "studentId" TEXT,

    CONSTRAINT "Volunteering_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socialIdentifiers" (
    "id" TEXT NOT NULL,
    "name" "Socials" NOT NULL,
    "url" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "socialIdentifiers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentCertificates" (
    "id" TEXT NOT NULL,
    "certificateName" TEXT NOT NULL,
    "issuedOrganization" TEXT NOT NULL,
    "issuedDate" DATE NOT NULL,
    "validDate" DATE,
    "certificateUrl" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "studentCertificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL,
    "place" TEXT,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "grades" TEXT NOT NULL,
    "description" TEXT,
    "program" TEXT NOT NULL,
    "board" TEXT,
    "fieldOfStudy" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentPublications" (
    "id" TEXT NOT NULL,
    "publicationTitle" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "studentId" TEXT,

    CONSTRAINT "studentPublications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentPatents" (
    "id" TEXT NOT NULL,
    "patentTitle" TEXT NOT NULL,
    "applicationNo" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "studentPatents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participationExams" (
    "id" TEXT NOT NULL,
    "examName" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT,
    "hallTicketUrl" TEXT,
    "resultUrl" TEXT,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "participationExams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievements" (
    "id" TEXT NOT NULL,
    "achievementType" "achievementType" NOT NULL,
    "achievementTitle" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coCurricular" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "certificateUrl" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "coCurricular_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "extraCurricular" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "certificateUrl" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "extraCurricular_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectsToSkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SkillsToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentEmail_key" ON "studentRegister"("studentEmail");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentPhone_key" ON "studentRegister"("studentPhone");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentAadhaar_key" ON "studentRegister"("studentAadhaar");

-- CreateIndex
CREATE INDEX "studentRegister_studentEmail_idx" ON "studentRegister"("studentEmail");

-- CreateIndex
CREATE INDEX "studentRegister_studentPhone_idx" ON "studentRegister"("studentPhone");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentEmail_studentPhone_key" ON "studentRegister"("studentEmail", "studentPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentRegisterId_key" ON "Student"("studentRegisterId");

-- CreateIndex
CREATE INDEX "Student_studentRegisterId_idx" ON "Student"("studentRegisterId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollNumber_studentRegisterId_key" ON "Student"("rollNumber", "studentRegisterId");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_name_key" ON "Branch"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "Community_communityName_key" ON "Community"("communityName");

-- CreateIndex
CREATE UNIQUE INDEX "Nationality_nationality_key" ON "Nationality"("nationality");

-- CreateIndex
CREATE UNIQUE INDEX "admissionExams_examName_key" ON "admissionExams"("examName");

-- CreateIndex
CREATE UNIQUE INDEX "Program_programName_key" ON "Program"("programName");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_skillName_key" ON "Skills"("skillName");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsToSkills_AB_unique" ON "_ProjectsToSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsToSkills_B_index" ON "_ProjectsToSkills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillsToStudent_AB_unique" ON "_SkillsToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillsToStudent_B_index" ON "_SkillsToStudent"("B");

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_reservationCategoryId_fkey" FOREIGN KEY ("reservationCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_nationalityId_fkey" FOREIGN KEY ("nationalityId") REFERENCES "Nationality"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_admissionExamsId_fkey" FOREIGN KEY ("admissionExamsId") REFERENCES "admissionExams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_studentRegisterId_fkey" FOREIGN KEY ("studentRegisterId") REFERENCES "studentRegister"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volunteering" ADD CONSTRAINT "Volunteering_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialIdentifiers" ADD CONSTRAINT "socialIdentifiers_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentCertificates" ADD CONSTRAINT "studentCertificates_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentPublications" ADD CONSTRAINT "studentPublications_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentPatents" ADD CONSTRAINT "studentPatents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participationExams" ADD CONSTRAINT "participationExams_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievements" ADD CONSTRAINT "Achievements_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coCurricular" ADD CONSTRAINT "coCurricular_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "extraCurricular" ADD CONSTRAINT "extraCurricular_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToSkills" ADD CONSTRAINT "_ProjectsToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToSkills" ADD CONSTRAINT "_ProjectsToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillsToStudent" ADD CONSTRAINT "_SkillsToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillsToStudent" ADD CONSTRAINT "_SkillsToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
