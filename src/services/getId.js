function getId(id){
    const MFseries = require("../mocks/series")
    for (let i of MFseries){
        if (i.id ===id){
            
            return i;
        }
    }
    return 'não encontrado';
}
module.exports = getId;