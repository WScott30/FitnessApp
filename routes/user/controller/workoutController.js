let workouts = [];

const workoutController = {
  // Get all workouts
  getAllWorkouts: (req, res) => {
    res.json(workouts);
  },

  // Get a single workout by ID
  getWorkoutById: (req, res) => {
    const workout = workouts.find(w => w.id === parseInt(req.params.id));
    if (!workout) return res.status(404).json({ message: "Workout not found" });
    res.json(workout);
  },

  // Create a new workout
  createWorkout: (req, res) => {
    const { type, duration, date } = req.body;
    if (!type || !duration || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newWorkout = {
      id: Date.now(),
      type,
      duration: Number(duration),
      date
    };
    workouts.push(newWorkout);
    res.status(201).json(newWorkout);
  },

  // Update a workout
  updateWorkout: (req, res) => {
    const { id } = req.params;
    const { type, duration, date } = req.body;
    const workoutIndex = workouts.findIndex(w => w.id === parseInt(id));
    if (workoutIndex === -1) {
      return res.status(404).json({ message: "Workout not found" });
    }
    workouts[workoutIndex] = { ...workouts[workoutIndex], type, duration: Number(duration), date };
    res.json(workouts[workoutIndex]);
  },

  // Delete a workout
  deleteWorkout: (req, res) => {
    const { id } = req.params;
    const workoutIndex = workouts.findIndex(w => w.id === parseInt(id));
    if (workoutIndex === -1) {
      return res.status(404).json({ message: "Workout not found" });
    }
    workouts.splice(workoutIndex, 1);
    res.status(204).send();
  }
};

module.exports = workoutController;