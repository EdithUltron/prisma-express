import { prisma } from "../../database/postgres/prisma-client.js";
import { Prisma } from "@prisma/client";

// Exclude keys from user
function exclude(user:any, keys:Array<any>) {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key))
  );
}


const getStudent = async (id:string) => {
    const pl = await prisma.student.findUnique({
        where: {
            id
        },
        include: {
            sid:true
        }
    });

    const sendable = exclude(pl,['password','createdOn','updatedOn'])
    return sendable;
}

export {getStudent}