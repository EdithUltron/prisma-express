import { NextFunction } from 'express';
import { Request, Response } from 'express';

const create = (createUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await createUseCase(req.body,next);
    return res.json(response);
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Cannot Create Admin' });
  }
};


const get = (getUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await getUseCase(req.params.id);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const list = (listUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await listUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const listAll = (listUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    console.log("In listAll")
    const response = await listUseCase();
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const login = (loginUseCase) => async (req:Request, res:Response,next:NextFunction) => {
  try {
    const response = await loginUseCase(req.body,next);
    return res.json(response);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const update = (updateUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await updateUseCase(req.params.id,req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const deleteData = (deleteUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await deleteUseCase(req.params.id);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const admin = {
  create,
  login,
  get,
  list,
  listAll,
  update,
  deleteData,
};

export default admin;