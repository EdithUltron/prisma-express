import express from "express";
import collegeFunctions from "../../controllers/college/index.js";


const router = express.Router();

router.get('/branches', collegeFunctions.getBranches); //get braches


export default router;