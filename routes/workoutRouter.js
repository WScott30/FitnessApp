const express = require('express')
const router = express.Router();
const workoutController = require('./user/controller/workoutController').default

// GET all workouts
router.get('/', (req, res) => {
  res.send('Get all workouts');
});

// POST a new workout
router.post('/', (req, res) => {
  res.send('Create a new workout');
});

// GET a specific workout
router.get('/:id', (req, res) => {
  res.send(`Get workout ${req.params.id}`);
});

// PUT update a workout
router.put('/:id', (req, res) => {
  res.send(`Update workout ${req.params.id}`);
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.send(`Delete workout ${req.params.id}`);
});

module.exports = router