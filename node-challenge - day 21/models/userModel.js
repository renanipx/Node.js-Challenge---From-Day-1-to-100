const { readUsersFromFile, writeUsersToFile } = require("../services/fileService");

async function getAllUsers() {
  return await readUsersFromFile();
}

async function createUser(newUser) {
  const users = await readUsersFromFile();
  newUser.id = Date.now();
  users.push(newUser);
  await writeUsersToFile(users);
  return newUser;
}

module.exports = { getAllUsers, createUser };
