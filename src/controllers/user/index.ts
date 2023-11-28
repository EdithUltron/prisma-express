import { createarStudent,createStudent,registerStudent } from "../../usecases/user/create.js";
import { listAll,pendinglist} from "../../usecases/user/list.js";
import { getStudent } from "../../usecases/user/get.js";
import { studentLogin } from "../../usecases/user/login.js";
import user from './user.js';

const studentFunctions = {

  registerStudent:user.register(registerStudent),
  createarStudent:user.createar(createarStudent),
  createFullStudent: user.create(createStudent),
  getStudent: user.get(getStudent),
  list: user.list(listAll),
  login: user.login(studentLogin),
  pendinglist: user.listAll(pendinglist),
  update: user.update(createarStudent),
  deleteData: user.deleteData(createarStudent)

};

export default studentFunctions;