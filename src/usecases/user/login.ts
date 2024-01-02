import { prisma } from "../../database/postgres/prisma-client.js";
import bcrypt from 'bcrypt'
import { sendToken } from "../../utils/auth.js";
import { NextFunction } from "express";
import errors from "../../utils/error-handler.js";


interface studentLoginInterface {
  studentEmail: string;
  password: string;
  collegeId: string;
  universityId: string;
}

const studentLogin = async (data:studentLoginInterface,next:NextFunction) => {
    // console.log(data)
    const { studentEmail, password,collegeId,universityId } = data;
    try {
        const college = await prisma.college.findFirst({
            where: {
                collegeId: collegeId
            }
        });
        
        if (!college) {
                         return next(
                           errors["UNAUTHORIZED_REQUEST"](
                             "College Not Found"
                           )
                         );
        }
        const univ = await prisma.university.findFirst({
            where: {
                universityId: universityId
            }
        });
        
        if (!univ) {
                         return next(
                           errors["UNAUTHORIZED_REQUEST"](
                             "University Not Found"
                           )
                         );
        }
            const {id} = await prisma.studentRegister.findUnique({
                where: {
                    studentEmail,
                    collegeId: college.id,
                    universityId:univ.id
                },
                select: {
                    id:true
                }
            });
        try {

            const passd = await prisma.student.findUnique({
                where: {
                    studentRegisterId: id,
                },
                select: {
                    id:true,
                    password: true,
                    role:true,
                    sid: {
                        select: {
                            department: {
                                select: {
                                    departmentName:true
                                }
                            },
                            firstName:true
                        }
                    }
                }
            });
            if (bcrypt.compareSync(password, passd.password)) {
                
                const token = await sendToken({ id: passd.id, role: passd.role, dataId:id,email:studentEmail,collegeId,universityId })
                return {
                    status : "success",
                    token: token,
                    user: {
                        name: passd.sid.firstName,
                        department:passd?.sid?.department?.departmentName
                    }
                }
            }
             else {
             return next(errors["UNAUTHORIZED_REQUEST"]("Incorrect Credentials"));
    }
        } catch (error) {
            return next(errors["UNAUTHORIZED_REQUEST"]("Email/College Not Found"));
        }
        
    } catch (error) {
        return next(errors["UNAUTHORIZED_REQUEST"]("Email Not Found"));
    }
}


export {studentLogin}