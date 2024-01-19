import { DataTypes } from "sequelize"
import db from "../db.js"

export default db.define("database", {
    nome: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false
    }
})
