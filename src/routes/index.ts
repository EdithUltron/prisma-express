import express from "express";

const router = express.Router();

import student from "./user/index.js";
import college from "./college/index.js";
import admin from "./admin.js"

router.use("/student", student);
router.use("/college", college);


router.use("/admin", admin);

export default router;
