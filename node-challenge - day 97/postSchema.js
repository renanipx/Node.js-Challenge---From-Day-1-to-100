const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = `
  type Post {
    id: ID!
    title: String!
    userId: ID!
  }

  type Query {
    postsByUser(userId: ID!): [Post]
  }
`;

const resolvers = {
  Query: {
    postsByUser: (_, { userId }) => [
      { id: "1", title: "Hello World", userId },
      { id: "2", title: "GraphQL is awesome", userId },
    ],
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
