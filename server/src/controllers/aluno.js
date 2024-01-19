import AlunoRepository from "../models/alunoModel.js"

async function findAll(req, res) {
    const users = await AlunoRepository.findAll()
    res.json(users)
}

export default { findAll }
