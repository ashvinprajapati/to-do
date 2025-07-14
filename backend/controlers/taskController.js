const Task = require("../models/taskmodel");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("Error in getTasks:", error.message);
    res.status(500).json({ error: error.message }); // ✅ Fix here
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body); // { text: "something" }
    const saved = await task.save(); // Save to MongoDB
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.editTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

exports.toggleComplete = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    const updated = await task.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to toggle task" });
  }
};

exports.deletetask = async(req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({message:"Task deleted"})
};
