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
    titulo: req.body.titulo,
    ano: req.body.ano,
    paginas: req.body.paginas,
    resumo: req.body.resumo,
    edicao: req.body.edicao,
    emprestado: req.body.emprestado,
    idcategoria: req.body.idcategoria,
    ideditora: req.body.ideditora,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Livro.update(
    {
      livro: req.body.livro,
      titulo: req.body.titulo,
      ano: req.body.ano,
      paginas: req.body.paginas,
      resumo: req.body.resumo,
      edicao: req.body.edicao,
      emprestado: req.body.emprestado,
      idcategoria: req.body.idcategoria,
      ideditora: req.body.ideditora,
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
