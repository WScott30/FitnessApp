const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts } = require('./user/controller/workoutController');
router.post('/workout', createWorkout);
router.get('/workouts', getWorkouts);
module.exports = router;