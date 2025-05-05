const { faker } = require('@faker-js/faker');

function generateUsers(count = 5) {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  }));
}

module.exports = generateUsers;
