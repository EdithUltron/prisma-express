import {  createStudent, createarStudent } from "../../usecases/admin/create.js";
import { listAll,pendinglist} from "../../usecases/admin/list.js";
// import { getAdmin } from "../../usecases/admin/get.js";
// import { adminLogin } from "../../usecases/admin/login.js";
import admin from './admin.js';
import { deleteStudentbr } from "../../usecases/admin/delete.js";

const adminFunctions = {
  createarStudent: admin.create(createarStudent),
  createFullStudent: admin.create(createStudent),
  decline: admin.deleteData(deleteStudentbr),
  list: admin.list(listAll),
  pendinglist: admin.listAll(pendinglist),
  // create: admin.create(createAdmin),
  // getAdmin: admin.get(getAdmin),
  // login: admin.login(adminLogin),
  // update: admin.update(createAdmin),
  // deleteData: admin.deleteData(createAdmin),
};

export default adminFunctions;