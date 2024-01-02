import { prisma } from "../../database/postgres/prisma-client.js";

const pendinglist =async () => {
    const pl = await prisma.studentRegister.findMany({
      where: {
        isRegistered: false,
      },
      include: {
        department: {
          select: {
            departmentName: true,
          },
        },
        category: {
          select: {
            categoryName: true,
          },
        },
        community: {
          select: {
            communityName: true,
          },
        },
        admittedUnder: {
          select: {
            examName: true,
          },
        },
      },
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