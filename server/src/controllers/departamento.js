import DepartamentoRepository from "../models/departamentoModel.js"

async function findAll(req, res) {
    const users = await DepartamentoRepository.findAll()
    res.json(users)
}

export default { findAll }
