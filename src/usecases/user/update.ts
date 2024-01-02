import { NextFunction } from "express";
import { prisma } from "../../database/postgres/prisma-client.js";
import { exclude } from "../../utils/exclude.js";

export const updateHomePageDetails = async (req, next: NextFunction) => {
  const { dataId } = req.user;
    const ldata = req.body;
    
    const data = await exclude(ldata, ["studentRegisterId"]);
    
  const updatedData = await prisma.studentRegister.update({
    where: {
      id:dataId,
    },
    data: {
      ...data,
    },
  });

  return updatedData;
};

export const updateProfileDetails = async (req, next: NextFunction) => {
  const { id } = req.user;
    const data = req.body;
        
  const updatedData = await prisma.student.update({
    where: {
      id:id,
    },
    data: {
      ...data,
    },
  });

  return updatedData;
};

export const updateProjects = async (id, data, next: NextFunction) => {
  //   const { id } = req.user;
  // const { id } = req.params;
  // const data = req.body;

  const updatedData = await prisma.projects.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });

  return updatedData;
};

export const updateEducation = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.education.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateExperience = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.experience.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateVolunteering = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.volunteering.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateSocials = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.socialIdentifiers.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateCertificates = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.studentCertificates.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updatePublications = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.studentPublications.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updatePatents = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.studentPatents.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateExams = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.participationExams.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateAchievements = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.achievements.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateCocurricular = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.coCurricular.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateExtracurricular = async (id, data, next: NextFunction) => {
    const updatedData = await prisma.extraCurricular.update({
        where:{
            id
        },
        data:{
            ...data,
        }
    });
    return updatedData;
};

export const updateSkills = async (id, data, next: NextFunction) => {

    const { rating } = data;

    const updatedData = await prisma.skillRating.update({
        where:{
            id
        },
        data:{
            rating:parseInt(rating)
        }
    });

    return updatedData;
};

