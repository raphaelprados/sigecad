import { DataTypes } from "sequelize"
import db from "../db.js"

export default db.define("notas", {
    disciplina: {
        type: DataTypes.STRING(8),
        primaryKey: true,
        allowNull: false
    },
    rga: {
        type: DataTypes.STRING(14),
        primaryKey: true,
        allowNull: false
    },
    nota1: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    nota2: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    nota3: {
        type: DataTypes.FLOAT
    },
    nota4: {
        type: DataTypes.FLOAT
    },
    nota5: {
        type: DataTypes.FLOAT
    },

})
