import express from "express"
import user from "../server/src/controllers/user.js"

const routes = express.Router()

routes.get("/", (req, res) => {
    return res.json({ name: "Foo" })
})

routes.get("/users", user.findAll)

export { routes as default }
