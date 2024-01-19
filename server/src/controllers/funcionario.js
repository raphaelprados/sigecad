import FuncionarioRepository from "../models/funcionarioModel.js"

async function findAll(req, res) {
    const users = await FuncionarioRepository.findAll()
    res.json(users)
}

export default { findAll }
