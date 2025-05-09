const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    time: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    time: () => new Date().toISOString(),
  },
};

module.exports = { typeDefs, resolvers };
