import express from "express";
import tarefasController from "./controllers/tarefasController.js";
import usuariosController from "./controllers/usuariosController.js";

const app = express()

app.use(express.json())

tarefasController(app)
usuariosController(app)

export default app