import { prisma } from "../../database/postgres/prisma-client.js";


const pendinglist =async () => {
    console.log("pendinglist")
    const pl = await prisma.studentRegister.findMany({
        where: {
            isRegistered: false
        }
    });
    console.log(pl)

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