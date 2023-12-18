import { Router } from "express";
import {
  getTiquetes,
  Getlogin,
  getSolicitudesAdmin,
  getSolicitudesFinanciero,
  CreateNewSolicitudes,
  AceptarAdmin,
  GetSolicitudesUser,
  AceptarFinanciero,
  Denegar
} from "../controllers/tiquetes.controllers.js";

const routerTiquetes = Router();

//obtener solicitudes en general
routerTiquetes.get("/solicitudes",getTiquetes);
routerTiquetes.post("/user",Getlogin);
routerTiquetes.get("/solicitudesAdmin",getSolicitudesAdmin);
routerTiquetes.get("/solicitudesFinanciero",getSolicitudesFinanciero);
routerTiquetes.post("/new",CreateNewSolicitudes);
routerTiquetes.put("/AceptarAdmin",AceptarAdmin);
routerTiquetes.put("/AceptarFinanciero",AceptarFinanciero);
routerTiquetes.put("/Denegar",Denegar);
routerTiquetes.put("/solicitudesUser",GetSolicitudesUser);

export default routerTiquetes;