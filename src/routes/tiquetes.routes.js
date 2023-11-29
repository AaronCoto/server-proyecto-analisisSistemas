import { Router } from "express";
import {
  getTiquetes,
  Getlogin
} from "../controllers/tiquetes.controllers.js";

const routerTiquetes = Router();

//obtener solicitudes en general
routerTiquetes.get("/solicitudes",getTiquetes);
routerTiquetes.get("/user",Getlogin);

export default routerTiquetes;