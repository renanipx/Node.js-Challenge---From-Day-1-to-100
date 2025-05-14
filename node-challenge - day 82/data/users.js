const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

const getUsersByIds = async (ids) => {
  console.log('Fetching users from DB:', ids);
  return ids.map(id => users.find(user => user.id === id));
};

module.exports = { getUsersByIds };
