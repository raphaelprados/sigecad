import ProfessorRepository from "../models/professorModel.js"

async function findAll(req, res) {
    const users = await ProfessorRepository.findAll()
    res.json(users)
}

export default { findAll }
