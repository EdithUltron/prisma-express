import { getAdmissionExams, getdepartments, getCategory, getCommunity, getPrograms } from "../../usecases/college/list.js";
import { getSkills } from "../../usecases/college/list.js";
import college from './college.js';

const collegeFunctions = {

    getPrograms:college.get(getPrograms),
    getDepartments:college.get(getdepartments),
    getCommunity:college.get(getCommunity),
    getCategory:college.get(getCategory),
    getAdmissionExams:college.get(getAdmissionExams),
    getSkills:college.get(getSkills)

};

export default collegeFunctions;