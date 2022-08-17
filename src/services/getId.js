// function getId(id){
//     const MFseries = require("../mocks/series")
//     for (let i of MFseries){
//         if (i.id ===id){
            
//             return i;
//         }
//     }
//     return 'não encontrado';
// }
const seriesmodel = require("../models/models");
async function getId(id){
    return await seriesmodel.find({id : id})
}
module.exports = getId;