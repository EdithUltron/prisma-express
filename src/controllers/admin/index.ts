import { createAdmin, createStudent, createarStudent } from "../../usecases/admin/create.js";
import { listAll,pendinglist} from "../../usecases/admin/list.js";
import { getAdmin } from "../../usecases/admin/get.js";
import { adminLogin } from "../../usecases/admin/login.js";
import admin from './admin.js';

const adminFunctions = {
  create: admin.create(createAdmin),
  createarStudent: admin.create(createarStudent),
  createFullStudent: admin.create(createStudent),
  getAdmin: admin.get(getAdmin),
  list: admin.list(listAll),
  login: admin.login(adminLogin),
  pendinglist: admin.listAll(pendinglist),
  update: admin.update(createAdmin),
  deleteData: admin.deleteData(createAdmin),
};

export default adminFunctions;