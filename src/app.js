import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import routerTiquetes from "./routes/tiquetes.routes.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
//app.use("/", indexRoutes);
//app.use("/api", employeesRoutes);
app.use("/tiquetes",routerTiquetes);
app.get("/",(req,res)=>res.send("hola"))

//cuando una peticion a una direccion no definida
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
