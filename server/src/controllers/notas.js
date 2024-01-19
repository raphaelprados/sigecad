import NotasRepository from "../models/notasModel.js"

async function findAll(req, res) {
    const users = await NotasRepository.findAll()
    res.json(users)
}

export default { findAll }
