const conexao = require('../connection/conexao');
//const schemaValidacaoPersonagem = require('./validacao');
const formatarData = require('./formatarData');

module.exports = {
    async getPersonagens(req, res) {
        //console.log('método foi chamado', req.body);
        const sql = 'SELECT * FROM personagens';
        conexao.query(sql, (err, result) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.status(200).json(result)
        })
    },

    async insertPersonagens(req, res) {
        var personagem = {}
        personagem.nome = req.body.nome;
        personagem.dataNascimento = formatarData(req.body.dataNascimento);
        personagem.natureza = req.body.natureza;
        personagem.titulo = req.body.titulo;
        personagem.time = req.body.time;
        personagem.sexo = req.body.sexo; 

        var dataFormatada = formatarData(req.body.dataNascimento);
        

        /* personagem
            .nome = nome
            .dataNascimento = formatarData(dataNascimento)
            .cla = cla
            .natureza = natureza
            .titulo = titulo
            .time = time 
            .sexo = sexo; 
            
            json 
            {
                "nome": "Naruto",
                "dataNascimento": "10/10/1999",
                "cla": "Uzumaki",
                "natureza": "Vento",
                "titulo": "Genin",
                "time": 7,
                "sexo": "M"
            }   
            (nome, dataNascimento, cla, natureza, titulo, time, sexo)
            */
        personagem.dataNascimento = dataFormatada;
        console.log('>>>> Personagem: ', personagem);

            
        const sql = 'INSERT INTO personagens VALUES ?';
        const valores =  [personagem.nome, personagem.dataNascimento, personagem.natureza, personagem.titulo, personagem.time, personagem.sexo];
        conexao.query(sql,personagem,( err, result) => {
            if (err) {
                console.log('>>> deu ruim', err);
                return res.status(400).json(err);
            }
            return res.status(201).json(result);
        });
    },
}