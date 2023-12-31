import { NextFunction } from "express";
import { prisma } from "../../database/postgres/prisma-client.js";

export const deleteProjects = async (id, next: NextFunction) => {

  const updatedData = await prisma.projects.delete({
    where: {
      id,
    }
  });

  return updatedData;
};


export const deleteEducation = async (id, next: NextFunction) => {
    const deletedData = await prisma.education.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteExperience = async (id, next: NextFunction) => {
    const deletedData = await prisma.experience.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteVolunteering = async (id, next: NextFunction) => {
    const deletedData = await prisma.volunteering.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteSocials = async (id, next: NextFunction) => {
    const deletedData = await prisma.socialIdentifiers.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteCertificates = async (id, next: NextFunction) => {
    const deletedData = await prisma.studentCertificates.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deletePublications = async (id, next: NextFunction) => {
    const deletedData = await prisma.studentPublications.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deletePatents = async (id, next: NextFunction) => {
    const deletedData = await prisma.studentPatents.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteExams = async (id, next: NextFunction) => {
    const deletedData = await prisma.participationExams.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteAchievements = async (id, next: NextFunction) => {
    const deletedData = await prisma.achievements.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteCocurricular = async (id, next: NextFunction) => {
    const deletedData = await prisma.coCurricular.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteExtracurricular = async (id, next: NextFunction) => {
    const deletedData = await prisma.extraCurricular.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
export const deleteSkills = async (id, next: NextFunction) => {
    const deletedData = await prisma.skills.delete({
    where: {
      id,
    }
  });

  return deletedData;
};
