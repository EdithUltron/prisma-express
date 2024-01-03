import { NextFunction } from 'express';
import { prisma } from "../../database/postgres/prisma-client.js";
import { exclude } from "../../utils/exclude.js";


export const getHomePageDetails =async (id:string) => {
    const pl = await prisma.student.findUnique({
      where: {
        id,
      },
      include: {
        sid: {
              include: {
                College: {
                      select: {
                        collegeId: true,
                    collegeName:true      
                      }
                  },
                program: {
                      select: {
                    programCode:true ,     
                    programName:true      
                      }
                  },
                university: {
                      select: {
                        universityId: true,
                    universityName:true      
                      }
                  },
            department: {
              select: {
                departmentName: true,
              },
            },
            category: {
              select: {
                categoryName: true,
              },
            },
            community: {
              select: {
                communityName: true,
              },
            },
            admittedUnder: {
              select: {
                examName: true,
              },
            },
          }
        },
      },
    });

    const sendable = await exclude(pl,['password','createdOn','updatedOn'])
    return sendable;
}


export const getProjects = async (id: string,next:NextFunction) => {
    const data = await prisma.student.findUnique({
        where: {
            id
        },
        select: {
          pid: {
            orderBy: {
              startDate:"asc"
            }
          }
      }
    });

    return data
}


export const getEducation = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      education: {
        orderBy: {
          startDate: "asc",
        }
      },
    },
  });

  return data;
};
export const getExperience = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      experience: {
        orderBy: {
          startDate: "asc",
        },
      },
    },
  });

  return data;
};
export const getVolunteering = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      volunteering: true,
    },
  });

  return data;
};
export const getSocials = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      socialIdentifiers: true,
    },
  });

  return data;
};
export const getCertificates = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      studentCertificates: true,
    },
  });

  return data;
};
export const getPublications = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      studentPublications: true,
    },
  });

  return data;
};
export const getPatents = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      studentPatents: true,
    },
  });

  return data;
};
export const getExams = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      participationExams: true,
    },
  });

  return data;
};
export const getAchievements = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      achievements: true,
    },
  });

  return data;
};
export const getCocurricular = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      coCurricular: true,
    },
  });

  return data;
};
export const getExtracurricular = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      extraCurricular: true,
    },
  });

  return data;
};
export const getSkills = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      SkillRating: {
        include: {
          skill: true,
        },
        orderBy: {
          rating:"desc"
        }
      }
    },
  });

  return data;
};

export const getScholarships = async (id: string, next: NextFunction) => {
  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      Scholarships: {
        orderBy: {
          date:"desc"
        }
      }
    },
  });

  return data;
};
