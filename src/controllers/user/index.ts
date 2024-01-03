import {createAchievements, createCertificates, createCocurricular, createEducation, createExams, createExperience, createExtracurricular, createPatents, createProjects, createPublications, createScholarships, createSkills, createSocials, createVolunteering, registerStudent } from "../../usecases/user/create.js";
import { deleteAchievements, deleteCertificates, deleteCocurricular, deleteEducation, deleteExams, deleteExperience, deleteExtracurricular, deletePatents, deleteProjects, deletePublications, deleteScholarships, deleteSkills, deleteSocials, deleteVolunteering } from "../../usecases/user/delete.js";
import { getAchievements, getCertificates, getCocurricular, getEducation, getExams, getExperience, getExtracurricular, getHomePageDetails, getPatents, getProjects, getPublications, getScholarships, getSkills, getSocials, getVolunteering } from "../../usecases/user/get.js";
import { studentLogin } from "../../usecases/user/login.js";
import { updateAchievements, updateCertificates, updateCocurricular, updateEducation, updateExams, updateExperience, updateExtracurricular, updateHomePageDetails, updatePatents, updateProfileDetails, updateProjects, updatePublications, updateScholarships, updateSkills, updateSocials, updateVolunteering } from "../../usecases/user/update.js";
import user, { checkemail,updateDetails } from './user.js';

const studentFunctions = {
  registerStudent: user.register(registerStudent),
  getHome: user.get(getHomePageDetails),
  getProjects: user.get(getProjects),
  getEducation: user.get(getEducation),
  getExperience: user.get(getExperience),
  getVolunteering: user.get(getVolunteering),
  getSocials: user.get(getSocials),
  getCertificates: user.get(getCertificates),
  getPublications: user.get(getPublications),
  getPatents: user.get(getPatents),
  getExams: user.get(getExams),
  getAchievements: user.get(getAchievements),
  getCocurricular: user.get(getCocurricular),
  getExtracurricular: user.get(getExtracurricular),
  getSkills: user.get(getSkills),
  getScholarships: user.get(getScholarships),

  createProjects: user.create(createProjects),
  createEducation: user.create(createEducation),
  createExperience: user.create(createExperience),
  createVolunteering: user.create(createVolunteering),
  createSocials: user.create(createSocials),
  createCertificates: user.create(createCertificates),
  createPublications: user.create(createPublications),
  createPatents: user.create(createPatents),
  createExams: user.create(createExams),
  createAchievements: user.create(createAchievements),
  createCocurricular: user.create(createCocurricular),
  createExtracurricular: user.create(createExtracurricular),
  createSkills: user.create(createSkills),
  createScholarships: user.create(createScholarships),

  updateHome: updateDetails(updateHomePageDetails),
  updateProfile: updateDetails(updateProfileDetails),
  updateProjects: user.update(updateProjects),
  updateEducation: user.update(updateEducation),
  updateExperience: user.update(updateExperience),
  updateVolunteering: user.update(updateVolunteering),
  updateSocials: user.update(updateSocials),
  updateCertificates: user.update(updateCertificates),
  updatePublications: user.update(updatePublications),
  updatePatents: user.update(updatePatents),
  updateExams: user.update(updateExams),
  updateAchievements: user.update(updateAchievements),
  updateCocurricular: user.update(updateCocurricular),
  updateExtracurricular: user.update(updateExtracurricular),
  updateSkills: user.update(updateSkills),
  updateScholarships: user.update(updateScholarships),

  deleteProjects: user.deleteData(deleteProjects),
  deleteEducation: user.deleteData(deleteEducation),
  deleteExperience: user.deleteData(deleteExperience),
  deleteVolunteering: user.deleteData(deleteVolunteering),
  deleteSocials: user.deleteData(deleteSocials),
  deleteCertificates: user.deleteData(deleteCertificates),
  deletePublications: user.deleteData(deletePublications),
  deletePatents: user.deleteData(deletePatents),
  deleteExams: user.deleteData(deleteExams),
  deleteAchievements: user.deleteData(deleteAchievements),
  deleteCocurricular: user.deleteData(deleteCocurricular),
  deleteExtracurricular: user.deleteData(deleteExtracurricular),
  deleteSkills: user.deleteData(deleteSkills),
  deleteScholarships: user.deleteData(deleteScholarships),

  login: user.login(studentLogin),

  checkEmail: checkemail(),
  forgotPassword: checkemail(),
  resetPassword: checkemail(),
};

export default studentFunctions;