import express from "express";

const router = express.Router();

import admin from "./admin/hod.js";

router.use("/hod", admin);
router.use("/examadmin", admin);
router.use("/administrationadmin", admin);
router.use("/principal", admin);
router.use("/alumniadmin", admin);
router.use("/certificateadmin", admin);
router.use("/staff", admin);

export default router;