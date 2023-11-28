import { prisma } from "../../database/postgres/prisma-client.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


interface studentLoginInterface{
    studentEmail: string,
    password:string
}

const studentLogin =async (data:studentLoginInterface) => {
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
                const token = jwt.sign({ id: passd.id, role: passd.role,branch:passd.sid.branch }, process.env.JWT_SECRET, {
                    expiresIn: '6 hours',
                });

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
                return {
                    status : "fail",
                }
            }
        } catch (error) {
            throw new Error("incorrect credentails")
        }

    } catch (error) {
        throw new Error("email not found")
    }
}


export {studentLogin}