import express from "express";
import adminFunctions from "../../controllers/admin/index.js";
import authAdmin from "../../middleware/adminAuth.js";

// import {
//     create, get, list, update, deleteData
// } from '../../controllers/admin';

async function demo(req,res,next) {
    res.send("Admin Route: "+(req?.params?.id));
}

const router = express.Router();

router.use(authAdmin);
router.get('/', demo);
router.post('/createar', adminFunctions.createarStudent); // create after register
router.post('/create', adminFunctions.createFullStudent); // create with register (send register id)
router.post('/createadmin', adminFunctions.create);
router.get('/pendinglist', adminFunctions.pendinglist); // list all registered students but not accepted
router.get('/list', adminFunctions.list); // list all students


export default router;