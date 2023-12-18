import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerTiquetes from "./routes/tiquetes.routes.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); 
// app.use(cors({
//   origin: 'http://127.0.0.1/', // Reemplaza con la URL de tu cliente
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// }));
// Routes
app.use("/tiquetes",routerTiquetes);
app.get("/",(req,res)=>res.send("hola"))

//cuando una peticion a una direccion no definida
app.use((req, res, next) => {
  res.status(404).json({ message: "ruta no definida" });
});

export default app;
