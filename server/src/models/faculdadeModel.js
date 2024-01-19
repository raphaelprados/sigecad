import { DataTypes } from "sequelize"
import db from "../db.js"

export default db.define("faculdade", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(10)
    }
})
