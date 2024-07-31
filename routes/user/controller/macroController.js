const Macro = require('./model/macro');

const createMacro = async (req, res) => {
  try {
    const macro = new Macro(req.body);
    await macro.save();
    res.status(201).json(macro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMacros = async (req, res) => {
  try {
    const macros = await Macro.find();
    res.json(macros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMacro = async (req, res) => {
  try {
    const macro = await Macro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(macro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMacro = async (req, res) => {
  try {
    await Macro.findByIdAndDelete(req.params.id);
    res.json({ message: 'Macro deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMacro,
  getMacros,
  updateMacro,
  deleteMacro,
};
