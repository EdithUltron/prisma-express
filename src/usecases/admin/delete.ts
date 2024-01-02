import { Prisma } from "@prisma/client";
import { prisma } from "../../database/postgres/prisma-client.js";

export const deleteStudentbr = async (id:string) => {
  const studentDeclined = prisma.studentRegister.delete({
      where: {
        id
    }
  });
  return studentDeclined;
};