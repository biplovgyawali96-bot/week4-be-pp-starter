const userModel = require("../models/userModel");

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();

  res.json(users);
};

const getUser = (req, res) => {
  const user = userModel.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const newUser = userModel.createUser(req.body);

  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const updatedUser = userModel.updateUser(
    req.params.id,
    req.body
  );

  if (!updatedUser) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(updatedUser);
};

const deleteUser = (req, res) => {
  const deleted = userModel.deleteUser(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(204).send();
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};