import Autor from "../models/AutorModel.js";

async function listar(req, res) {
  const dados = await Autor.findAll();
  res.json(dados);
}
async function selecionar(req, res) {
  await Autor.findByPk(req.params.idautor)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Autor.create({
    autor: req.body.autor,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Autor.update(
    {
      autor: req.body.autor,
    },
    {
      where: { idautor: req.params.idautor },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function excluir(req, res) {
  await Autor.destroy({
    where: { idautor: req.params.idautor },
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir };
