const controller_tarefas = (app) => {
  app.get("/tarefas", (req, res) => {
    res.send({ msg: "você está em tarefas" });
  });
};

export default controller_tarefas;
