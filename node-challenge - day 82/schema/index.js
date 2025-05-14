const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
    users(ids: [ID!]!): [User]
  }
`;

const resolvers = {
  Query: {
    user: (_, { id }, { loaders }) => loaders.userLoader.load(id),
    users: (_, { ids }, { loaders }) => loaders.userLoader.loadMany(ids),
  },
};

module.exports = { typeDefs, resolvers };
