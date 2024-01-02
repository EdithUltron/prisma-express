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
CREATE TYPE "Socials" AS ENUM ('PERSONAL_WEBSITE', 'LINKEDIN', 'YOUTUBE', 'TWITTER', 'DISCORD', 'FACEBOOK', 'INSTAGRAM', 'BLOG', 'OTHER');

-- CreateEnum
CREATE TYPE "EducationType" AS ENUM ('PRIMARY', 'SECONDARY', 'INTERMEDIATE', 'UNDERGRADUATE', 'POSTGRADUATE', 'PHD', 'VOCATIONAL', 'PROFESSIONAL');

-- CreateEnum
CREATE TYPE "achievementType" AS ENUM ('HONOR', 'AWARD');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'FACULTY', 'HOD', 'EXAM_ADMIN', 'ADMINISTRATION_ADMIN', 'REGISTRAR', 'PRINCIPAL', 'VICE_CHANCELLOR', 'ALUMNI_ADMIN', 'CERTIFICATE_ADMIN', 'SUPERADMIN', 'STAFF');

-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "universityName" TEXT NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "collegeName" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentRegister" (
    "id" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "studentPhone" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "dob" DATE,
    "firstName" TEXT,
    "lastName" TEXT,
    "departmentId" TEXT,
    "reservationCategoryId" TEXT,
    "bloodGroup" "bloodGroup",
    "gender" "Gender",
    "communityId" TEXT,
    "annualIncome" TEXT,
    "address" TEXT,
    "religion" "Religion",
    "nationality" TEXT,
    "fatherName" TEXT,
    "fatherOccupation" TEXT,
    "fatherPhone" TEXT,
    "isRegistered" BOOLEAN DEFAULT false,
    "state" TEXT,
    "district" TEXT,
    "mandal" TEXT,
    "city" TEXT,
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
    "slugLine" TEXT DEFAULT 'student',
    "profilePic" TEXT,
    "resumeUrl" TEXT,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "imageUrl" TEXT,
    "slugLine" TEXT,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" TEXT NOT NULL,
    "communityName" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
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
    "programCode" TEXT NOT NULL,
    "programName" TEXT,
    "collegeId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATE,
    "endDate" DATE,
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
CREATE TABLE "SkillRating" (
    "id" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "SkillRating_pkey" PRIMARY KEY ("id")
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
    "program" "EducationType",
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
CREATE TABLE "_ProjectsToSkillRating" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "University_universityId_key" ON "University"("universityId");

-- CreateIndex
CREATE UNIQUE INDEX "College_collegeId_key" ON "College"("collegeId");

-- CreateIndex
CREATE INDEX "College_collegeId_idx" ON "College"("collegeId");

-- CreateIndex
CREATE INDEX "College_collegeName_idx" ON "College"("collegeName");

-- CreateIndex
CREATE UNIQUE INDEX "College_collegeId_collegeName_key" ON "College"("collegeId", "collegeName");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentEmail_key" ON "studentRegister"("studentEmail");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentPhone_key" ON "studentRegister"("studentPhone");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentAadhaar_key" ON "studentRegister"("studentAadhaar");

-- CreateIndex
CREATE INDEX "studentRegister_collegeId_idx" ON "studentRegister"("collegeId");

-- CreateIndex
CREATE INDEX "studentRegister_studentEmail_idx" ON "studentRegister"("studentEmail");

-- CreateIndex
CREATE INDEX "studentRegister_studentPhone_idx" ON "studentRegister"("studentPhone");

-- CreateIndex
CREATE INDEX "studentRegister_firstName_lastName_idx" ON "studentRegister"("firstName", "lastName");

-- CreateIndex
CREATE UNIQUE INDEX "studentRegister_studentEmail_studentPhone_key" ON "studentRegister"("studentEmail", "studentPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentRegisterId_key" ON "Student"("studentRegisterId");

-- CreateIndex
CREATE INDEX "Student_studentRegisterId_rollNumber_idx" ON "Student"("studentRegisterId", "rollNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollNumber_studentRegisterId_key" ON "Student"("rollNumber", "studentRegisterId");

-- CreateIndex
CREATE INDEX "Department_departmentId_departmentName_collegeId_idx" ON "Department"("departmentId", "departmentName", "collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentId_departmentName_collegeId_key" ON "Department"("departmentId", "departmentName", "collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "Community_communityName_key" ON "Community"("communityName");

-- CreateIndex
CREATE UNIQUE INDEX "admissionExams_examName_key" ON "admissionExams"("examName");

-- CreateIndex
CREATE INDEX "Program_programName_idx" ON "Program"("programName");

-- CreateIndex
CREATE UNIQUE INDEX "Program_programName_collegeId_key" ON "Program"("programName", "collegeId");

-- CreateIndex
CREATE INDEX "Projects_studentId_idx" ON "Projects"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_projectName_startDate_studentId_key" ON "Projects"("projectName", "startDate", "studentId");

-- CreateIndex
CREATE INDEX "Experience_studentId_idx" ON "Experience"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_startDate_company_studentId_key" ON "Experience"("startDate", "company", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_skillName_key" ON "Skills"("skillName");

-- CreateIndex
CREATE INDEX "Skills_skillName_idx" ON "Skills"("skillName");

-- CreateIndex
CREATE UNIQUE INDEX "SkillRating_skillId_studentId_key" ON "SkillRating"("skillId", "studentId");

-- CreateIndex
CREATE INDEX "Volunteering_studentId_idx" ON "Volunteering"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteering_startDate_organizationName_studentId_key" ON "Volunteering"("startDate", "organizationName", "studentId");

-- CreateIndex
CREATE INDEX "socialIdentifiers_studentId_idx" ON "socialIdentifiers"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "socialIdentifiers_name_url_studentId_key" ON "socialIdentifiers"("name", "url", "studentId");

-- CreateIndex
CREATE INDEX "studentCertificates_studentId_idx" ON "studentCertificates"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentCertificates_certificateName_issuedOrganization_issu_key" ON "studentCertificates"("certificateName", "issuedOrganization", "issuedDate", "studentId");

-- CreateIndex
CREATE INDEX "Education_studentId_idx" ON "Education"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Education_startDate_instituteName_studentId_key" ON "Education"("startDate", "instituteName", "studentId");

-- CreateIndex
CREATE INDEX "studentPublications_studentId_idx" ON "studentPublications"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentPublications_publicationTitle_publisher_studentId_key" ON "studentPublications"("publicationTitle", "publisher", "studentId");

-- CreateIndex
CREATE INDEX "studentPatents_studentId_idx" ON "studentPatents"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentPatents_patentTitle_applicationNo_studentId_key" ON "studentPatents"("patentTitle", "applicationNo", "studentId");

-- CreateIndex
CREATE INDEX "participationExams_studentId_idx" ON "participationExams"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "participationExams_examName_date_studentId_key" ON "participationExams"("examName", "date", "studentId");

-- CreateIndex
CREATE INDEX "Achievements_studentId_idx" ON "Achievements"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Achievements_achievementTitle_achievementType_date_studentI_key" ON "Achievements"("achievementTitle", "achievementType", "date", "studentId");

-- CreateIndex
CREATE INDEX "coCurricular_studentId_idx" ON "coCurricular"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "coCurricular_name_date_studentId_key" ON "coCurricular"("name", "date", "studentId");

-- CreateIndex
CREATE INDEX "extraCurricular_studentId_idx" ON "extraCurricular"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "extraCurricular_name_date_studentId_key" ON "extraCurricular"("name", "date", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsToSkillRating_AB_unique" ON "_ProjectsToSkillRating"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsToSkillRating_B_index" ON "_ProjectsToSkillRating"("B");

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_reservationCategoryId_fkey" FOREIGN KEY ("reservationCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_admissionExamsId_fkey" FOREIGN KEY ("admissionExamsId") REFERENCES "admissionExams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentRegister" ADD CONSTRAINT "studentRegister_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_studentRegisterId_fkey" FOREIGN KEY ("studentRegisterId") REFERENCES "studentRegister"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillRating" ADD CONSTRAINT "SkillRating_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillRating" ADD CONSTRAINT "SkillRating_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volunteering" ADD CONSTRAINT "Volunteering_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialIdentifiers" ADD CONSTRAINT "socialIdentifiers_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentCertificates" ADD CONSTRAINT "studentCertificates_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentPublications" ADD CONSTRAINT "studentPublications_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentPatents" ADD CONSTRAINT "studentPatents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participationExams" ADD CONSTRAINT "participationExams_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievements" ADD CONSTRAINT "Achievements_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coCurricular" ADD CONSTRAINT "coCurricular_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "extraCurricular" ADD CONSTRAINT "extraCurricular_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToSkillRating" ADD CONSTRAINT "_ProjectsToSkillRating_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToSkillRating" ADD CONSTRAINT "_ProjectsToSkillRating_B_fkey" FOREIGN KEY ("B") REFERENCES "SkillRating"("id") ON DELETE CASCADE ON UPDATE CASCADE;
