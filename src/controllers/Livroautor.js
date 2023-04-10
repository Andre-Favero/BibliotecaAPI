import Livroautor from "../models/LivroautorModel.js";

async function listar(req, res) {
  const dados = await Livroautor.findAll();
  res.json(dados);
}

async function selecionar(req, res) {
  await Livroautor.findByPk(req.params.idlivroautor)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Livroautor.create({
    livroautor: req.body.livroautor,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Livroautor.update(
    {
      livroautor: req.body.livroautor,
    },
    {
      where: { idlivroautor: req.params.idlivroautor },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function excluir(req, res) {
  await Livroautor.destroy({
    where: { idlivroautor: req.params.idlivroautor },
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir };
