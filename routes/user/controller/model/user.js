 import mongoose from "mongoose"

 const UserSchema = new mongoose.Schema({
    username: { type: String, 
        required: true },
    email: { type: String,
        required: true, 
        unique: true },
    password: { type: String, 
        required: true },
    favoriteMeals: [{ type: mongoose.Schema.Types.ObjectId,
         ref: 'Meal' }],
    favoriteWorkouts: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'Workout' }],
    goals: {
      calorieGoal: { type: Number, 
        default: 2000 },
      workoutGoal: { type: Number, 
        default: 5 }
    },
    progress: [{
      date: { type: Date, 
        default: Date.now },
      weight: Number,
      caloriesConsumed: Number,
      workoutsCompleted: Number
    }]
  });
  
  module.exports = mongoose.model('User', UserSchema)