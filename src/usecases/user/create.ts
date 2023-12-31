import { prisma } from "../../database/postgres/prisma-client.js";
import { NextFunction ,Request} from "express";
import errors from "../../utils/error-handler.js";
import { checkEmail } from "../../utils/checkEmail.js";
import { Prisma } from "@prisma/client";



export const registerStudent =async (data:Prisma.studentRegisterUncheckedCreateInput,next:NextFunction) => {
    const { studentEmail } = data;
    const validateEmail = await checkEmail(studentEmail);

    if (!validateEmail?.status) {
      // next(new createHttpError.Unauthorized(validateEmail?.message));
      return next(errors["UNAUTHORIZED_REQUEST"](validateEmail?.message));
    }
    
    const registerStu = await prisma.studentRegister.create({
        data,
    });
    return registerStu;
}

export const createProjects = async (req, next: NextFunction) => {
  
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.projects.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}

export const createEducation = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.education.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createExperience = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.experience.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createVolunteering = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.volunteering.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createSocials = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.socialIdentifiers.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createCertificates = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.studentCertificates.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createPublications  = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.studentPublications.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createPatents = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.studentPatents.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createExams = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.participationExams.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createAchievements = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.achievements.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createCocurricular = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.coCurricular.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createExtracurricular = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data  = req.body;

  const project = await prisma.extraCurricular.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}
export const createSkills = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.skills.create({
    data: {
      studentId: id,
      ...data
    }
  });

  return project;
}