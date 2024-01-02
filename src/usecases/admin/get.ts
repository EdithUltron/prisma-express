import { prisma } from "../../database/postgres/prisma-client.js";
import { exclude } from "../../utils/exclude.js";


// export const getAdmin = async (id:string) => {
//     const pl = await prisma.admin.findUnique({
//         where: {
//             id
//         }
//     });

//     const sendable = exclude(pl,['password','createdOn','updatedOn'])
//     return sendable;
// }

export const getBranch = async () => {
    const branches = await prisma.branch.findMany();
    return branches;
}


export const getStudent = async (id: string) => {
  const pl = await prisma.student.findUnique({
    where: {
      id,
    },
    include: {
      sid: true,
    },
  });

  const sendable = exclude(pl, ["password", "createdOn", "updatedOn"]);
  return sendable;
};