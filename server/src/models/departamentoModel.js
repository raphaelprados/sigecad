import { DataTypes } from "sequelize"
import db from "../db.js"

export default db.define("departamento", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
