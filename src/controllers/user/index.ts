import { createarStudent,createStudent,registerStudent } from "../../usecases/user/create.js";
import user from './user.js';

const studentFunctions = {

  registerStudent:user.register(registerStudent),
  createarStudent:user.createar(createarStudent),
  create: user.create(createStudent),
  get: user.get(createarStudent),
  list: user.list(createarStudent),
  update: user.update(createarStudent),
  deleteData: user.deleteData(createarStudent)

};

export default studentFunctions;