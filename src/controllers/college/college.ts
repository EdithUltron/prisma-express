const create = (createUseCase) => async (req, res) => {
  try {
    const response = await createUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'User not created' });
  }
};

const register = (registerUseCase) => async (req, res) => {
  try {
    const response = await registerUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'User not registered' });
  }
};


const get = (getUseCase) => async (req, res) => {
  try {
    const response = await getUseCase(req.params.id);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Data not found.' });
  }
};

const list = (listUseCase) => async (req, res) => {
  try {
    const response = await listUseCase(req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Data not found.' });
  }
};

const update = (updateUseCase) => async (req, res) => {
  try {
    const response = await updateUseCase(req.params.id,req.body);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Data not found.' });
  }
};

const deleteData = (deleteUseCase) => async (req, res) => {
  try {
    const response = await deleteUseCase(req.params.id);
    return res.json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Data not found.' });
  }
};

const college = {
  create,
  register,
  get,
  list,
  update,
  deleteData,
};

export default college;