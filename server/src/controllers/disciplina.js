import DisciplinaRepository from "../models/disciplinaModel.js"

async function findAll(req, res) {
    const users = await DisciplinaRepository.findAll()
    res.json(users)
}

export default { findAll }
