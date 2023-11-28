import { getBranches } from "../../usecases/college/list.js";
import college from './college.js';

const collegeFunctions = {

    getBranches:college.get(getBranches)

};

export default collegeFunctions;