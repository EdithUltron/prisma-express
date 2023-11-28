import express from "express";
import studentFunctions from "../../controllers/user/index.js";

async function demo(req,res,next) {
    res.send("User Route: "+(req?.params?.id));
}

const router = express.Router();

router.get('/pendinglist', studentFunctions.pendinglist); // list all registered students but not accepted
router.post('/register', studentFunctions.registerStudent); // first register
router.post('/createar', studentFunctions.createarStudent); // create after register
router.post('/create', studentFunctions.createFullStudent); // create with register (send register id)
router.get('/:id',studentFunctions.getStudent); // get by id
router.get('/list', studentFunctions.list); // list all students
router.put('/update/:id', demo); // update by id
router.delete('/delete/:id', demo); // delete by id

export default router;