import express from "express";
import studentFunctions from "../controllers/user/index.js";
import adminFunctions from "../controllers/admin/index.js";


const router = express.Router();

router.post('/checkemail', studentFunctions.checkEmail);
router.post('/student/register', studentFunctions.registerStudent); // first register
router.post('/faculty/register', studentFunctions.registerStudent); // first register
router.post('/studentlogin', studentFunctions.login);
router.post('/facultylogin', studentFunctions.login);
router.post('/adminlogin', adminFunctions.login);
router.post('/superadminlogin', studentFunctions.login);

export default router;