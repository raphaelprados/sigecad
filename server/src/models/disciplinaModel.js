import { DataTypes } from "sequelize";
import db from "../db.js"

export default db.define("disciplina", {
    id: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true
    },
    formula_media: {
        type: DataTypes.STRING
    }
})