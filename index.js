const dotenv = require('dotenv').config();
const express = require('express');
const conexao = require('./connection/conexao');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const personagens = require('./controllers');

app.use('/personagens', personagens);

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server is run ${process.env.HOST}:${process.env.PORT}`);
            console.log(`🏦🎲🎲 MySQL ✅`);
        })
    }

})
