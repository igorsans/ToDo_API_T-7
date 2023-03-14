import express from "express";
import controller_tarefas from "./controllers/tarefas.js";

const app = express()
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})


controller_tarefas(app)