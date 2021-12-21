const router = require('express').Router();
const personagens = require('./personagensControllers');

router.get('/', personagens.getPersonagens);
router.post('/', personagens.insertPersonagens);
router.get('/:id', personagens.getPersonagensById);
router.patch('/:id', personagens.updatePersonagemById);
module.exports = router;