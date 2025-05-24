const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = `
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    user: (_, { id }) => ({ id, name: "User " + id }),
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
