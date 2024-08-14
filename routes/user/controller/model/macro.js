const mongoose = require('mongoose');

const MacroSchema = new mongoose.Schema({
  date: { type: Date,
     default: Date.now },
  protein: { type: Number, 
    required: true },
  carbs: { type: Number,
     required: true },
  fats: { type: Number, 
    required: true },
});

module.exports = mongoose.model('macro', MacroSchema);