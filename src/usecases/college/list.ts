import { prisma } from "../../database/postgres/prisma-client.js";
// import { Prisma } from "@prisma/client";

const getBranches =async () => {
    const branches = await prisma.branch.findMany();
    return branches
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


export {getBranches}