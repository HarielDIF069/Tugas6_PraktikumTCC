import { Sequelize } from "sequelize";

const db = new Sequelize("crud_notes", "root", "", {
  host: "34.72.202.85",
  dialect: "mysql",
});

export default db;
