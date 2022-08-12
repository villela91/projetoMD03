const mongoose = require('mongoose');//importação do mongoose no meu arquivo
//função de conexão ao meu banco MFseries-db lá no mongo compass.
function connectTodatabase(){
    mongoose
    .connect('mongodb://localhost:27017/MFseries',{
        useNewUrlparser: true,//para não ter problema com a url..
        useUnifiedTopology:true, //unificando a topologia de rede para não dar ruim na conexa


    })
    .then(() => console.log('MongoDB Conectado ;)!!!'))
    .catch((erro) =>
    console.log(` erro ao conctar com o  MongoDB!, erro: ${erro}`)
    );
}

module.exports = connectTodatabase;