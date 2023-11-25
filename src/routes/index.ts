import express from "express";

const router = express.Router();

import user from "./user/index.js";
import admin from "./admin/index.js";
import superadmin from "./superadmin/index.js";

router.use("/user", user);
router.use("/admin", admin);
router.use("/superadmin", superadmin);

export default router;