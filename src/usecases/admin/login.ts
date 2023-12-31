import { prisma } from "../../database/postgres/prisma-client.js";
import bcrypt from "bcrypt";
import { sendToken } from "../../utils/auth.js";
import { NextFunction } from "express";
import errors from "../../utils/error-handler.js";

interface adminLoginInterface {
  adminEmail: string;
  password: string;
}

const adminLogin = async (data: adminLoginInterface,next:NextFunction) => {
  // console.log(data)
  const { adminEmail, password } = data;
  try {
    const user = await prisma.admin.findUnique({
      where: {
        adminEmail,
      },
      select: {
        id: true,
        password: true,
        role: true,
        firstName: true,
        lastName: true,
        branch: {
          select: {
            name: true,
          },
        },
      },
    });

    if (bcrypt.compareSync(password, user.password)) {
      const token = await sendToken({
        id: user.id,
        role: user.role,
        email: adminEmail,
      });

      return {
        status: "success",
        token: token,
        user: {
          firstName: user?.firstName,
          lastName: user?.lastName,
          branch: user?.branch,
        },
      };
    } else {
             return next(errors["UNAUTHORIZED_REQUEST"]("Incorrect Credentials"));
    }
  } catch (error) {
        return next(errors["UNAUTHORIZED_REQUEST"]("Email Not Found"));
  }
};

export { adminLogin };
