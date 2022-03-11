const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set goal
// @route POST /api/goals
// @access Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Pls add a text field");
  }
  res.json({ message: "Get Goals" });
  res.status(200);
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const putGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` });
  res.status(200);
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Delete goal ${req.params.id}` });
  res.status(200);
});

module.exports = {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
};
