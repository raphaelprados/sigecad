import disciplinaModel from "./disciplinaModel.js"
import modeloDisciplinaModel from "./modeloDisciplinaModel.js"

function Relationships() {
    disciplinaModel.hasOne(modeloDisciplinaModel, {
        foreignKey: 'id'
    })
    modeloDisciplinaModel.belongsTo(disciplinaModel)
}

export default Relationships
