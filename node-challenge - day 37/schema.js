const { gql } = require('apollo-server-express');

// Type Definitions (Schema)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

module.exports = { typeDefs, resolvers };
