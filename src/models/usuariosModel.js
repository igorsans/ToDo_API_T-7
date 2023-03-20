import bd from "../infra/bd.js";

const usuariosModel = {
  modelar: (obj) => {
    return {
      nome: obj.nome,
      email: obj.email,
      senha: obj.senha,
    };
  },
  armazenar: (obj) => {
    const modelado = usuariosModel.modelar(obj);
    bd.usuarios.push(modelado);
    return {
      dados: { msg: "Usuario criado com sucesso" },
      status: 201,
    };
  },
  mostarTodos: () => {
    return {
      dados: { msg: bd.usuarios },
      status: 200,
    };
  },
  mostrarUm: (param) => {
    const data = bd.usuarios.map((item) => {
      if (item.email == param) {
        return item;
      }
    });
    return {
      dados: {
        msg: data,
      },
      status: 200,
    };
  },
  deletar: (param) => {
    const data = bd.usuarios.map((item) => {
      if (item.email !== param) {
        return item;
      }
    });
    bd.usuarios = data;
    return {
      dados: {
        msg: `usuario com parametro : ${param} deletado com sucesso`,
      },
      status: 200,
    };
  },
};

export default usuariosModel;
