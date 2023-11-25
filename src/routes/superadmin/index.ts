import express from "express";

// import {
//     create, get, list, update, deleteData
// } from '../../controllers/superadmin';

async function demo(req,res,next) {
    res.send("SuperAdmin Route: "+(req?.params?.id));
}

const router = express.Router();

router.get('/', demo);
router.post('/create', demo);
router.post('/list', demo);
router.get('/:id',demo);
router.put('/update/:id', demo);
router.delete('/delete/:id', demo);

export default router;