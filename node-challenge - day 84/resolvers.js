const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }, { loaders }) => loaders.user.load(id),
  },
};

export default resolvers;
