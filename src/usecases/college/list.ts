import { prisma } from "../../database/postgres/prisma-client.js";
// import { Prisma } from "@prisma/client";

export const getdepartments =async (id) => {
    const departments = await prisma.department.findMany({
        where: {
            college: {
                collegeId:id
            }
        }
    });
    return departments
}

export const getCommunity =async () => {
    const community = await prisma.community.findMany();
    return community
}

export const getCategory =async () => {
    const category = await prisma.category.findMany();
    return category
}

export const getAdmissionExams =async () => {
    const admissionExams = await prisma.admissionExams.findMany();
    return admissionExams
}

export const getSkills =async () => {
    const skills = await prisma.skills.findMany();
    return skills
}

export const getPrograms = async (id) => {
    const programs = await prisma.program.findMany({
      where: {
        college: {
          collegeId: id,
        },
      },
    });
  return programs;
};
