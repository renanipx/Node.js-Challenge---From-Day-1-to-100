const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json");

async function readUsersFromFile() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeUsersToFile(users) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
}

module.exports = { readUsersFromFile, writeUsersToFile };
