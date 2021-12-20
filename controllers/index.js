const router = require('express').Router();
const personagens = require('./personagensControllers');

router.get('/', personagens.getPersonagens);
router.post('/', personagens.insertPersonagens);
module.exports = router;