import express from "express";
import collegeFunctions from "../../controllers/college/index.js";


const router = express.Router();

router.get('/departments/:id', collegeFunctions.getDepartments); //get braches
router.get('/programs/:id', collegeFunctions.getPrograms); //get braches
router.get('/community', collegeFunctions.getCommunity); //get comm
router.get('/category', collegeFunctions.getCategory); //get cat
router.get('/admissionexams', collegeFunctions.getAdmissionExams); //get exams
router.get('/skills', collegeFunctions.getSkills); //get exams


export default router;