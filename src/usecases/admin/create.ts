import { prisma } from "../../database/postgres/prisma-client.js";
import { Prisma, Branch } from "@prisma/client";

const createBranch =async (data:Prisma.BranchUncheckedCreateInput) => {
    const branch = prisma.branch.create({
        data,
    });
    return branch;
}

export { createBranch };