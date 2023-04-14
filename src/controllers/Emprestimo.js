import { where } from "sequelize";
import Emprestimo from "../models/EmprestimoModel.js";
import Livro from "../models/LivroModel.js";

async function listar(req, res) {
  const dados = await Emprestimo.findAll();
  res.json(dados);
}
async function selecionar(req, res) {
  await Emprestimo.findByPk(req.params.idemprestimo)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function pendencia(req, res) {
  await Emprestimo.findAll({ where: { devolucao: null } })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function historico(req, res) {
  await Emprestimo.findAll({ where: { idpessoa: req.params.idpessoa } })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
}

async function inserir(req, res) {
  await Emprestimo.create(
    {
      emprestimo: req.body.emprestimo,
      vencimento: req.body.vencimento,
      devolucao: req.body.devolucao,
      idlivro: req.body.idlivro,
      idpessoa: req.body.idpessoa,
    },
    await Livro.update(
      {
        emprestado: true,
      },
      {
        where: { idlivro: req.body.idlivro },
      }
    )
  )
    .then((result) => res.json(result).console.log(result))
    .catch((err) => res.status(400).json(err));
}

async function alterar(req, res) {
  const data = await Emprestimo.findByPk(req.params.idemprestimo);
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
    },
    await Livro.update(
      {
        emprestado: false,
      },
      {
        where: { idlivro: data.idlivro },
      }
    )
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

export default {
  listar,
  selecionar,
  inserir,
  alterar,
  excluir,
  pendencia,
  historico,
};
