import SemestreRepository from "../models/semestreModel.js"

async function findAll(req, res) {
    const users = await SemestreRepository.findAll()
    res.json(users)
}

export default { findAll }
