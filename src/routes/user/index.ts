import express from "express";
import studentFunctions from "../../controllers/user/index.js";
import auth from "../../middleware/auth.js";

async function demo(req,res,next) {
    res.send("User Route: "+(req?.params?.id));
}

const router = express.Router();

router.post('/register', studentFunctions.registerStudent); // first register
router.use(auth);
router.get('/', studentFunctions.getHome); // get by id
router.get('/projects', studentFunctions.getProjects);
router.get('/education', studentFunctions.getEducation);
router.get('/experience', studentFunctions.getExperience);
router.get('/volunteering', studentFunctions.getVolunteering);
router.get('/socials', studentFunctions.getSocials);
router.get('/certificates', studentFunctions.getCertificates);
router.get('/publications', studentFunctions.getPublications);
router.get('/patents', studentFunctions.getPatents);
router.get('/exams', studentFunctions.getExams);
router.get('/achievements', studentFunctions.getAchievements);
router.get('/cocurricular', studentFunctions.getCocurricular);
router.get('/extracurricular', studentFunctions.getExtracurricular);
router.get('/skills', studentFunctions.getSkills);

router.post('/createprojects', studentFunctions.createProjects);
router.post('/createeducation', studentFunctions.createEducation);
router.post('/createexperience', studentFunctions.createExperience);
router.post('/createvolunteering', studentFunctions.createVolunteering);
router.post('/createsocials', studentFunctions.createSocials);
router.post('/createcertificates', studentFunctions.createCertificates);
router.post('/createpublications', studentFunctions.createPublications);
router.post('/createpatents', studentFunctions.createPatents);
router.post('/createexams', studentFunctions.createExams);
router.post('/createachievements', studentFunctions.createAchievements);
router.post('/createcocurricular', studentFunctions.createCocurricular);
router.post('/createextracurricular', studentFunctions.createExtracurricular);
router.post('/createskills', studentFunctions.createSkills);

router.put('/', studentFunctions.updateHome); // get by id
router.put('/updateprojects/:id', studentFunctions.updateProjects);
router.put('/updateeducation/:id', studentFunctions.updateEducation);
router.put('/updateexperience/:id', studentFunctions.updateExperience);
router.put('/updatevolunteering/:id', studentFunctions.updateVolunteering);
router.put('/updatesocials/:id', studentFunctions.updateSocials);
router.put('/updatecertificates/:id', studentFunctions.updateCertificates);
router.put('/updatepublications/:id', studentFunctions.updatePublications);
router.put('/updatepatents/:id', studentFunctions.updatePatents);
router.put('/updateexams/:id', studentFunctions.updateExams);
router.put('/updateachievements/:id', studentFunctions.updateAchievements);
router.put('/updatecocurricular/:id', studentFunctions.updateCocurricular);
router.put('/updateextracurricular/:id', studentFunctions.updateExtracurricular);
router.put('/updateskills/:id', studentFunctions.updateSkills);

router.delete('/deleteprojects/:id', studentFunctions.deleteProjects);
router.delete('/deleteeducation/:id', studentFunctions.deleteEducation);
router.delete('/deleteexperience/:id', studentFunctions.deleteExperience);
router.delete('/deletevolunteering/:id', studentFunctions.deleteVolunteering);
router.delete('/deletesocials/:id', studentFunctions.deleteSocials);
router.delete('/deletecertificates/:id', studentFunctions.deleteCertificates);
router.delete('/deletepublications/:id', studentFunctions.deletePublications);
router.delete('/deletepatents/:id', studentFunctions.deletePatents);
router.delete('/deleteexams/:id', studentFunctions.deleteExams);
router.delete('/deleteachievements/:id', studentFunctions.deleteAchievements);
router.delete('/deletecocurricular/:id', studentFunctions.deleteCocurricular);
router.delete('/deleteextracurricular/:id', studentFunctions.deleteExtracurricular);
router.delete('/deleteskills/:id', studentFunctions.deleteSkills);


router.put('/update/:id', demo); // update by id
router.delete('/delete/:id', demo); // delete by id
router.post("/forgotpassword", studentFunctions.forgotPassword);
router.post("/resetpassword/:resetToken",studentFunctions.resetPassword);

export default router;