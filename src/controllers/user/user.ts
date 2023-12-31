import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { checkEmail } from '../../utils/checkEmail.js';
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user:  {role:string}
}
const create = (createUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await createUseCase(req,next);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({status:"fail", error: 'Cannot Create' });
  }
};

const register = (registerUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await registerUseCase(req.body,next);
    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Cannot Register - Check Aadhaar/Phone/Email' });
  }
};

export const updateDetails = (UpdateUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await UpdateUseCase(req,next);
    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Cannot Update' });
  }
};



const get = (getUseCase) => async (req, res:Response,next:NextFunction) => {
  try {
    const response = await getUseCase(req.user.id,next);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const list = (listUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await listUseCase(req.body,next);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const listAll = (listUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await listUseCase();
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const login = (loginUseCase) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await loginUseCase(req.body, next);
      return res.json(response);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

const update = (updateUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await updateUseCase(req.params.id,req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Cannot Update' });
  }
};

const deleteData = (deleteUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await deleteUseCase(req.params.id);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Cannot Delete' });
  }
};

export const checkemail =  () =>
    async (req: Request, res: Response, next: NextFunction) => {
      const { email } = req.body;
    try {
      const response = await checkEmail(email);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: "error checking mail" });
    }
    };
  
    
const user = {
  create,
  login,
  register,
  get,
  list,
  listAll,
  update,
  deleteData,
};

export default user;
