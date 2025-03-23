const { getAllUsers, createUser } = require("../models/userModel");

async function listUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to list users" });
  }
}

async function addUser(req, res) {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
}

module.exports = { listUsers, addUser };
