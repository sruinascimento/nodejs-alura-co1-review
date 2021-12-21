const Joi = require('joi');

const schemaValidacaoPersonagem = Joi.object().keys({
    nome: Joi.string().min(3).max(50).required(),
    dataNascimento: Joi.string().required(),
    cla: Joi.string().max(50).required(),
    natureza: Joi.string().max(50).required(),
    titulo: Joi.string().max(50).required(),
    time: Joi.number().required(),
    sexo: Joi.string().max(1).required()
});


module.exports = schemaValidacaoPersonagem;