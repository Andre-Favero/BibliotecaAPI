import Livro from "../models/LivroModel.js";

async function listar(req, res) {
  const dados = await Livro.findAll();
  res.json(dados);
}
async function selecionar(req, res) {
  await Livro.findByPk(req.params.idlivro)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Livro.create({
    livro: req.body.livro,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Livro.update(
    {
      livro: req.body.livro,
    },
    {
      where: { idlivro: req.params.idlivro },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function excluir(req, res) {
  await Livro.destroy({
    where: { idlivro: req.params.idlivro },
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir };
