import ModeloDisciplinaRepository from "../models/modeloDisciplinaModel.js"

async function findAll(req, res) {
    const users = await ModeloDisciplinaRepository.findAll()
    res.json(users)
}

export default { findAll }
