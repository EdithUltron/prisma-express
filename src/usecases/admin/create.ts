import { prisma } from "../../database/postgres/prisma-client.js";
import { Prisma } from "@prisma/client";
import { checkEmail } from "../../utils/checkEmail.js";
import { NextFunction } from "express";
import errors from "../../utils/error-handler.js";
import bcrypt from "bcrypt";


// export const createAdmin = async (data: Prisma.adminUncheckedCreateInput,next:NextFunction) => {
    
//     const validateEmail = await checkEmail(data.adminEmail);

//     if (!validateEmail?.status) {
//         // next(new createHttpError.Unauthorized(validateEmail?.message));
//         return next(errors["UNAUTHORIZED_REQUEST"](validateEmail?.message));
//     }

//     const createAdmin = await prisma.admin.create({
//         data: {
//             ...data,
//             password: bcrypt.hashSync(data.password,9)
//         }
//     });
//     return createAdmin;
// }



export const createdepartment =async (data:Prisma.DepartmentUncheckedCreateInput) => {
    const department = prisma.department.create({
        data,
    });
    return department;
}


// send studentRegisterId
export const createarStudent = async (
  data: Prisma.StudentUncheckedCreateInput,
  next: NextFunction
) => {
  const { studentRegisterId } = data;
  const { lastName, studentPhone,isRegistered } = await prisma.studentRegister.findUnique({
    where: {
      id: studentRegisterId,
    },
  });

  if (isRegistered) {
        return next(errors["UNAUTHORIZED_REQUEST"]("Student Already Registered"));
  }
  // const pHash = bcrypt.hashSync((lastName.toLowerCase()+"@"+studentPhone.slice(0,5)), 9);
  const pHash = bcrypt.hashSync(studentPhone, 9);
  const student = await prisma.student.create({
    data: {
      sid: {
        connect: {
          id: studentRegisterId,
        },
      },
      password: pHash,
    },
  });

  const stureg = await prisma.studentRegister.update({
    where: {
      id: studentRegisterId,
    },
    data: {
      isRegistered:true
    }
  });

  return student;
};

interface createStudentInterface {
  studentRoll: string,
  department: string,
  studentEmail: string,
  studentPhone: string,
  year: string,
  collegeId:string,
  universityId:string,
}

export const createStudent = async (
  data: createStudentInterface,
  next: NextFunction
) => {
  const {
    studentRoll,
    studentEmail,
    studentPhone,
    department,
    year,
    collegeId,
    universityId,
  } = data;

  const validateEmail = await checkEmail(studentEmail);

  if (!validateEmail?.status) {
    // next(new createHttpError.Unauthorized(validateEmail?.message));
    return next(errors["UNAUTHORIZED_REQUEST"](validateEmail?.message));
  }

  const student = prisma.student.create({
    data: {
      password: bcrypt.hashSync(studentRoll, 9),
      rollNumber: studentRoll,
      sid: {
        create: {
          studentEmail: studentEmail,
          studentPhone: studentPhone,
          College: {
            connect: {
              collegeId,
            }
          },
          university: {
            connect: {
              universityId,
            }
          },
          isRegistered: true,
          yearOfAdmission:year,
          department: {
            connect: {
              id: department,
            },
          },
        },
      },
    },
  });

  return student;
};


