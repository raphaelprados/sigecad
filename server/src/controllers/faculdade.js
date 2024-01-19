import FaculdadeRepository from "../models/faculdadeModel.js"

async function findAll(req, res) {
    const users = await FaculdadeRepository.findAll()
    res.json(users)
}

export default { findAll }
