// /src/resolvers.js
const { ApolloError } = require('apollo-server');

// Sample data
const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" }
];

const resolvers = {
  Query: {
    getUser: (parent, { id }) => {
      const user = users.find(u => u.id === id);
      if (!user) {
        throw new ApolloError("User not found", "USER_NOT_FOUND");
      }

      // Simulate a system failure
      if (id === "2") {
        throw new ApolloError("Something went wrong with the database", "DATABASE_ERROR");
      }

      return user;
    },
  },
};

module.exports = resolvers;
