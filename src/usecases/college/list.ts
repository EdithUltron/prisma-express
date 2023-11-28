import { prisma } from "../../database/postgres/prisma-client.js";
// import { Prisma } from "@prisma/client";

const getBranches =async () => {
    const branches = await prisma.branch.findMany();
    return branches
}


export {getBranches}