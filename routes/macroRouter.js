const express = require('express');
const router = express.Router();
const { createMacro, getMacros, updateMacro, deleteMacro } = require('./user/controller/macroController');

router.post('/macros', createMacro);
router.get('/macros', getMacros);
router.put('/macros/:id', updateMacro);
router.delete('/macros/:id', deleteMacro);

module.exports = router;