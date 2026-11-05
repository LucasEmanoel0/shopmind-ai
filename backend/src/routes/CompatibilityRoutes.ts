import {Router} from "express";
import CompatibilityController from "../controllers/CompatibilityController.js";


const routerCompatibility = Router();

const compatibilityController = new CompatibilityController()

routerCompatibility.post('/check', compatibilityController.checkSocketCompatibility);
export default routerCompatibility;