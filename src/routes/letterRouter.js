const express = require('express');
const router = express.Router();
const letterController = require('../controllers/letterController');

router.post('/', letterController.createLetter);
router.get('/:id', letterController.getLetters);
module.exports = router;
