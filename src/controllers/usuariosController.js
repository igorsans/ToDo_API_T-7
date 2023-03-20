import usuariosModel from "../models/usuariosModel.js";

const usuariosController = (app) => {
  app.get("/usuarios", (req, res) => {
    const resposta = usuariosModel.mostarTodos()
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/usuarios/:email", (req, res) => {
    const resposta = usuariosModel.mostrarUm(req.params.email)
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/usuarios", (req, res) => {
    const resposta = usuariosModel.armazenar(req.body)
    res.status(resposta.status).send(resposta.dados);
  });
  app.delete("/usuarios/:email", (req, res) => {
    const resposta = usuariosModel.deletar(req.params.email)
    res.status(resposta.status).send(resposta.dados)
  } )
};

export default usuariosController;
