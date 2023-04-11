import { Sequelize } from "sequelize";
import banco from "../banco.js";

export default banco.define("livro", {
  idlivro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  paginas: {
    type: Sequelize.INTEGER,
  },
  edicao: {
    type: Sequelize.INTEGER,
  },
  resumo: {
    type: Sequelize.TEXT,
  },
  emprestado: {
    type: Sequelize.BOOLEAN,
  },
  idcategoria: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ideditora: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
