import express from "express";
import studentFunctions from "../../controllers/user/index.js";

async function demo(req,res,next) {
    res.send("User Route: "+(req?.params?.id));
}

const router = express.Router();

router.get('/', demo);
router.post('/login', demo);
router.post('/register', studentFunctions.registerStudent); // first register
router.post('/create', studentFunctions.create); // create with register (send register id)
router.post('/createar', demo); // create after register
router.post('/list', demo); // list all students
router.get('/:id',demo); // get by id
router.put('/update/:id', demo); // update by id
router.delete('/delete/:id', demo); // delete by id

export default router;