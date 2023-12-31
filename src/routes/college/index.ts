import express from "express";
import collegeFunctions from "../../controllers/college/index.js";


const router = express.Router();

router.get('/branches', collegeFunctions.getBranches); //get braches
router.get('/community', collegeFunctions.getCommunity); //get comm
router.get('/category', collegeFunctions.getCategory); //get cat
router.get('/admissionexams', collegeFunctions.getAdmissionExams); //get exams


export default router;