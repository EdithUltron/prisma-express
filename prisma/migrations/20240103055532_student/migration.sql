-- AlterTable
ALTER TABLE "Achievements" ADD COLUMN     "eventName" TEXT,
ADD COLUMN     "teamOrIndiv" TEXT;

-- AlterTable
ALTER TABLE "coCurricular" ADD COLUMN     "eventName" TEXT,
ADD COLUMN     "issuer" TEXT,
ADD COLUMN     "level" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "extraCurricular" ADD COLUMN     "eventName" TEXT,
ADD COLUMN     "issuer" TEXT,
ADD COLUMN     "level" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "studentPublications" ADD COLUMN     "ISSN_NO" TEXT,
ADD COLUMN     "publicationDetails" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "url" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Scholarships" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "org" TEXT NOT NULL,
    "institution" BOOLEAN,
    "amount" TEXT,
    "url" TEXT,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Scholarships_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Scholarships" ADD CONSTRAINT "Scholarships_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
