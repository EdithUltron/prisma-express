import { prisma } from "../../database/postgres/prisma-client.js";
import { NextFunction, Request } from "express";
import errors from "../../utils/error-handler.js";
import { checkEmail } from "../../utils/checkEmail.js";
import { Prisma } from "@prisma/client";
import { connect } from "http2";

export const registerStudent = async (
  data: Prisma.studentRegisterUncheckedCreateInput,
  next: NextFunction
) => {
  const { studentEmail, collegeId, universityId, departmentId } = data;
  const validateEmail = await checkEmail(studentEmail);

  if (!validateEmail?.status) {
    // next(new createHttpError.Unauthorized(validateEmail?.message));
    return next(errors["UNAUTHORIZED_REQUEST"](validateEmail?.message));
  }


  const college = await prisma.college.findFirst({
    where: {
      collegeId,
    },
  });

  if (!college) {
    return next(errors["FORBIDDEN"]("college not found"));
  }
  const univ = await prisma.university.findFirst({
    where: {
      universityId,
    },
  });

  if (!univ) {
    return next(errors["FORBIDDEN"]("University not found"));
  }

  const registerStu = await prisma.studentRegister.create({
    data: {
      ...data,
      collegeId: college.id,
      universityId: univ.id,
    },
  });
  return registerStu;
};

export const createProjects = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.projects.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};

export const createEducation = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.education.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createExperience = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.experience.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createVolunteering = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.volunteering.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createSocials = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.socialIdentifiers.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createCertificates = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.studentCertificates.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createPublications = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.studentPublications.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createPatents = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.studentPatents.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createExams = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.participationExams.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createAchievements = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.achievements.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createCocurricular = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.coCurricular.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createExtracurricular = async (req, next: NextFunction) => {
  const { id } = req.user;
  const data = req.body;

  const project = await prisma.extraCurricular.create({
    data: {
      studentId: id,
      ...data,
    },
  });

  return project;
};
export const createSkills = async (req, next: NextFunction) => {
  const { id } = req.user;
  const { rating } = req.body;

  const project = await prisma.skillRating.create({
    data: {
      studentId: id,
      ...req.body,
      rating:parseInt(rating),
    },
  });

  return project;
};
export const createScholarships = async (req, next: NextFunction) => {
    const { id } = req.user;
    const data = req.body;

    const project = await prisma.scholarships.create({
      data: {
        studentId: id,
        ...data,
      },
    });

    return project;
};
