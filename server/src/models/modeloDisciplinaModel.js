import { DataTypes } from "sequelize"
import db from "../db.js"

export default db.define("modelo_disciplina", {
    id: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horas_praticas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    horas_teoricas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})