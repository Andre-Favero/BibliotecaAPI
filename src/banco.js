import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);
export default sequelize;
