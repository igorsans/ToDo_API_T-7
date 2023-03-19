import express from "express";
import tarefasController from "./controllers/tarefasController.js";
import usuariosController from "./controllers/usuariosController.js";

const app = express()
app.use(express.json())
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})


tarefasController(app)
usuariosController(app)