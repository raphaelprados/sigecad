import { Sequelize } from "sequelize"

const sequelize = new Sequelize("sigecad", "postgres", "admin", {
    dialect: "postgres",
    host: "localhost"
})

export default sequelize
