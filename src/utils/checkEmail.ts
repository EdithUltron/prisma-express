import { prisma } from "../database/postgres/prisma-client.js";

export const checkEmail = async (email: string) => {
  const student = await prisma.studentRegister.findUnique({
    where: {
      studentEmail:email
    },
  });

    if (student) {
        return {
          status: false,
          message: "Student With Mail Already Exists",
        };
    }

  const admin = await prisma.admin.findUnique({
    where: {
      adminEmail:email
    },
  });

    if (admin) {
        return {
            status: false,
            message:"Admin With Mail Already Exists"
        }
    }


    return {
        status: true,
    }
    
    
};
