import { DataTypes } from "sequelize";
import db from "../db.js"

export default db.define("aluno", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rga: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})
