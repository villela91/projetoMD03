const mongoose = require('mongoose');
const Seriesschema = new mongoose.Schema({
    id:{type: String,required: true},
     nome:{type: String,required: true},
    ano:{type: String,required: true},
    temporadas:{type: Number,required: true},
    genero:{type: String,required: true},
    elenco:{type: Array,required: true},
})

const SeriesModels = new mongoose.model("MFseries",Seriesschema)

module.exports = SeriesModels;