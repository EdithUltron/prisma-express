import { prisma } from "../../database/postgres/prisma-client.js";
import { Prisma } from "@prisma/client";

// send studentRegisterId
const createarStudent = async (data: Prisma.StudentUncheckedCreateInput) => {
    const { studentRegisterId } = data;
    const { lastName, studentPhone } = await prisma.studentRegister.findUnique({
        where: {
            id: studentRegisterId
        }
    });
    const student = await prisma.student.create({
        data: {
            sid: {
                connect: {
                   id:studentRegisterId
               }
            },
            password:lastName+"@"+studentPhone.slice(0,5)
        },
    });
    return student;
}

const registerStudent =async (data:Prisma.studentRegisterUncheckedCreateInput) => {
    const registerStu = await prisma.studentRegister.create({
        data,
    });
    return registerStu;
}

interface createStudentInterface{
    studentRoll: string,
    branch: string,
    studentEmail: string,
    studentPhone: string,
}

const createStudent = async (data: createStudentInterface) => {
    const { studentRoll, studentEmail, studentPhone,branch } = data;

    const student = prisma.student.create({
        data: {
            password: studentRoll + "_" + branch,
            rollNumber: studentRoll,
            sid: {
                create: {
                    studentEmail: studentEmail,
                    studentPhone: studentPhone,
                    isRegistered: true,
                    branch: {
                        connect: {
                            name: branch
                        }
                    },
                }
            }
        }
    });

    return student;
}


export { createarStudent,registerStudent,createStudent };
