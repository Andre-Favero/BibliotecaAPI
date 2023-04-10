import Emprestimo from "../models/EmprestimoModel.js";

async function listar(req, res) {
  const dados = await Emprestimo.findAll();
  res.json(dados);
}
async function selecionar(req, res) {
  await Emprestimo.findByPk(req.params.idemprestimo)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Emprestimo.create({
    emprestimo: req.body.emprestimo,
    vencimento: req.body.vencimento,
    devolucao: req.body.devolucao,
    idlivro: req.body.idlivro,
    idpessoa: req.body.idpessoa,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  await Emprestimo.update(
    {
      emprestimo: req.body.emprestimo,
      vencimento: req.body.vencimento,
      devolucao: req.body.devolucao,
      idlivro: req.body.idlivro,
      idpessoa: req.body.idpessoa,
    },
    {
      where: { idemprestimo: req.params.idemprestimo },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function excluir(req, res) {
  await Emprestimo.destroy({
    where: { idemprestimo: req.params.idemprestimo },
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir };
