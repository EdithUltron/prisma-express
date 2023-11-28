import express from "express";
import studentFunctions from "../controllers/user/index.js";


const router = express.Router();

router.post('/studentlogin', studentFunctions.login);
router.post('/facultylogin', studentFunctions.login);
router.post('/adminlogin', studentFunctions.login);

export default router;