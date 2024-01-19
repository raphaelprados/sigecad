import { DataTypes, INTEGER } from "sequelize"
import db from "../db.js"

export default db.define("professor", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    faculdade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
})
