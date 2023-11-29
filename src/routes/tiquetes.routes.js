import { Router } from "express";
import {
  getTiquetes
} from "../controllers/tiquetes.controllers.js";

const routerTiquetes = Router();

//obtener solicitudes en general
routerTiquetes.get("/solicitudes",getTiquetes);

export default routerTiquetes;