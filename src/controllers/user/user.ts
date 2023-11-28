import { NextFunction } from 'express';
import { Request, Response } from 'express';

const create = (createUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await createUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'student already exists' });
  }
};

const register = (registerUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await registerUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'phone or email already exists' });
  }
};

const createar = (createarUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await createarUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'student cannot be created' });
  }
};

const get = (getUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await getUseCase(req.params.id);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const list = (listUseCase) => async (req:Request, res:Response) => {
  try {
    const response = await listUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'data not found.' });
  }
};

const listAll = (listUseCase) => async (req:Request, res:Response) => {
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
    const response = await loginUseCase(req.body);
    if (response.status == "fail") {
      return res.status(500).json("incorrect password");
    }
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

const user = {
  create,
  login,
  register,
  createar,
  get,
  list,
  listAll,
  update,
  deleteData,
};

export default user;