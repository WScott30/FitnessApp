const express = require('express');
const router = express.Router();
const macroController = require('./user/controller/macroController')

// Get all meals
router.get('/', macroController.getAllMeals);

// Add a new meal
router.post('/', macroController.addMeal);

// Update a meal
router.put('/:id', macroController.updateMeal);

// Delete a meal
router.delete('/:id', macroController.deleteMeal);

// Get total macros
router.get('/total', macroController.getTotalMacros);

module.exports = router;