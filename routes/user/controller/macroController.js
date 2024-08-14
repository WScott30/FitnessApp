let meals = [];

const macroController = {
  // Get all meals
  getAllMeals: (req, res) => {
    res.json(meals);
  },

  // Add a new meal
  addMeal: (req, res) => {
    const { name, protein, carbs, fat } = req.body;
    if (!name || protein == null || carbs == null || fat == null) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newMeal = {
      id: Date.now(), 
      name,
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat)
    };
    meals.push(newMeal);
    res.status(201).json(newMeal);
  },

  // Update a meal
  updateMeal: (req, res) => {
    const { id } = req.params;
    const { name, protein, carbs, fat } = req.body;
    const mealIndex = meals.findIndex(meal => meal.id === Number(id));
    if (mealIndex === -1) {
      return res.status(404).json({ message: "Meal not found" });
    }
    meals[mealIndex] = { ...meals[mealIndex], name, protein, carbs, fat };
    res.json(meals[mealIndex]);
  },

  // Delete a meal
  deleteMeal: (req, res) => {
    const { id } = req.params;
    const mealIndex = meals.findIndex(meal => meal.id === Number(id));
    if (mealIndex === -1) {
      return res.status(404).json({ message: "Meal not found" });
    }
    meals.splice(mealIndex, 1);
    res.status(204).send();
  },

  // Get total macros
  getTotalMacros: (req, res) => {
    const totalMacros = meals.reduce((acc, meal) => {
      acc.protein += meal.protein;
      acc.carbs += meal.carbs;
      acc.fat += meal.fat;
      return acc;
    }, { protein: 0, carbs: 0, fat: 0 });
    res.json(totalMacros);
  }
};

module.exports = macroController;