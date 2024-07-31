const Workout = require('./model/workout');

const createWorkout = async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    return res.status(201).json(workout);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const { sortBy, filterByType } = req.query;
    const queryOptions = {};

    // Apply filter
    if (filterByType) {
      queryOptions.type = filterByType;
    }

    // Apply sorting
    const sortOptions = {};
    if (sortBy) {
      const sortField = sortBy.startsWith('-') ? sortBy.substring(1) : sortBy;
      const sortOrder = sortBy.startsWith('-') ? -1 : 1;
      sortOptions[sortField] = sortOrder;
    }

    const workouts = await Workout.find(queryOptions).sort(sortOptions).exec();
    return res.json(workouts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
};
