import { prisma } from "../../database/postgres/prisma-client.js";
import { exclude } from "../../utils/exclude.js";


export const getHomePageDetails =async (id:string) => {
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


export const getProjects = async (id: string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            pid:true
        }
    });

    return data
}


export const getEducation =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            education:true
        }
    });

    return data
}
export const getExperience =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            experience:true
        }
    });

    return data
}
export const getVolunteering =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            volunteering:true
        }
    });

    return data
}
export const getSocials =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            socialIdentifiers:true
        }
    });

    return data
}
export const getCertificates =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            studentCertificates:true
        }
    });

    return data
}
export const getPublications =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            studentPublications:true
        }
    });

    return data
}
export const getPatents =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            studentPatents:true
        }
    });

    return data
}
export const getExams =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            participationExams:true
        }
    });

    return data
}
export const getAchievements =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            achievements:true
        }
    });

    return data
}
export const getCocurricular =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            coCurricular:true
        }
    });

    return data
}
export const getExtracurricular =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            extraCurricular:true
        }
    });

    return data
}
export const getSkills =async (id:string) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
            skills:true
        }
    });

    return data
}
