import express from "express";

const router = express.Router();

import student from "./user/index.js";
import college from "./college/index.js"
import admin from "./admin/index.js";
import superadmin from "./superadmin/index.js";

router.use("/student", student);
router.use("/college", college);
router.use("/admin", admin);
router.use("/superadmin", superadmin);

export default router;