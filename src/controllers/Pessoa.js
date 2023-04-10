import Pessoa from "../models/PessoaModel.js";

async function listar(req, res) {
  const dados = await Pessoa.findAll();
  res.json(dados);
}
async function selecionar(req, res) {
  await Pessoa.findByPk(req.params.idpessoa)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Pessoa.create({
    pessoa: req.body.pessoa,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Pessoa.update(
    {
      pessoa: req.body.pessoa,
    },
    {
      where: { idpessoa: req.params.idpessoa },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function excluir(req, res) {
  await Pessoa.destroy({
    where: { idpessoa: req.params.idpessoa },
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir };
