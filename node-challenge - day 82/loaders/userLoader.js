const DataLoader = require('dataloader');
const { getUsersByIds } = require('../data/users');

const userLoader = new DataLoader(async (ids) => {
  return await getUsersByIds(ids);
});

module.exports = userLoader;
