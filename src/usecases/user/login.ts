import { prisma } from "../../database/postgres/prisma-client.js";
import bcrypt from 'bcrypt'
import { sendToken } from "../../utils/auth.js";
import { NextFunction } from "express";
import errors from "../../utils/error-handler.js";


interface studentLoginInterface{
    studentEmail: string,
    password:string
}

const studentLogin = async (data:studentLoginInterface,next:NextFunction) => {
    // console.log(data)
    const { studentEmail, password } = data;
    try {
            const {id} = await prisma.studentRegister.findUnique({
                where: {
                    studentEmail
                },
                select: {
                    id:true
                }
            });
        try {
            const passd = await prisma.student.findUnique({
                where: {
                    studentRegisterId: id
                },
                select: {
                    id:true,
                    password: true,
                    role:true,
                    sid: {
                        select: {
                            branch: {
                                select: {
                                    name:true
                                }
                            },
                            firstName:true
                        }
                    }
                }
            });
            if (bcrypt.compareSync(password, passd.password)) {
                
                const token = await sendToken({ id: passd.id, role: passd.role, dataId:id,email:studentEmail })

                return {
                    status : "success",
                    token: token,
                    user: {
                        name: passd.sid.firstName,
                        branch:passd.sid.branch.name
                    }
                }
            }
             else {
             return next(errors["UNAUTHORIZED_REQUEST"]("Incorrect Credentials"));
    }
  } catch (error) {
        return next(errors["UNAUTHORIZED_REQUEST"]("Email Not Found"));
  }

    } catch (error) {
        return next(errors["UNAUTHORIZED_REQUEST"]("Email Not Found"));
    }
}


export {studentLogin}