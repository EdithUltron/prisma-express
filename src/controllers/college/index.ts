import { getAdmissionExams, getBranches, getCategory, getCommunity } from "../../usecases/college/list.js";
import college from './college.js';

const collegeFunctions = {

    getBranches:college.get(getBranches),
    getCommunity:college.get(getCommunity),
    getCategory:college.get(getCategory),
    getAdmissionExams:college.get(getAdmissionExams)

};

export default collegeFunctions;