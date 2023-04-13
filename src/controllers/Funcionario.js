import Funcionario from "../models/FuncionarioModel.js";

async function listar(req, res) {
  const dados = await Funcionario.findAll();
  res.json(dados);
}
async function selecionar(req, res) {
  await Funcionario.findByPk(req.params.idfuncionario)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Funcionario.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Funcionario.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    },
    {
      where: { idfuncionario: req.params.idfuncionario },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function excluir(req, res) {
  await Funcionario.destroy({
    where: { idfuncionario: req.params.idfuncionario },
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir };
