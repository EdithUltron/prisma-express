import { prisma } from "../../database/postgres/prisma-client.js";
import { Prisma } from "@prisma/client";

const pendinglist =async () => {
    const pl = await prisma.studentRegister.findMany({
        where: {
            isRegistered: false
        }
    });

    return pl;
}

const listAll = async () => {
    const pl = await prisma.student.findMany();
    return pl;
}




export {
    pendinglist,
    listAll,
}