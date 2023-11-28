import { prisma } from "../../database/postgres/prisma-client.js";
import { Prisma } from "@prisma/client";

const getBranch = async () => {
    const branches = await prisma.branch.findMany();
    return branches;
}

// const getStudent 

export {getBranch}