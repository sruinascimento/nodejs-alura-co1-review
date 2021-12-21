const conexao = require('../connection/conexao');
const schemaValidacaoPersonagem = require('./validacao');
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
        personagem.cla = req.body.cla;

        console.log('>>>> Req: ', req.body);
        
        console.log('>>>> Personagem: ', personagem);
        const {error, value} = schemaValidacaoPersonagem.validate(personagem);

        console.log('>>>> error: ', error);
        console.log('>>>> values: ', value);

        if (error) {
            return res.status(400).json(error);
        } 
        if (!error && value) {
            const sql = 'INSERT INTO personagens SET ?';
            conexao.query(sql,personagem,( err, result) => {
                if (err) {
                    console.log('>>> deu ruim', err);
                    return res.status(400).json(err);
                }
                return res.status(201).json(result);
            });
        }
            
        
    },

    async getPersonagensById(req, res) {
        const id = parseInt(req.params.id); 
        const sql = 'SELECT * FROM personagens WHERE id = ?';
        conexao.query(sql, id, (err, result) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.status(200).json(result)
        })
    },

    async updatePersonagemById(req, res) {

    }
}































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