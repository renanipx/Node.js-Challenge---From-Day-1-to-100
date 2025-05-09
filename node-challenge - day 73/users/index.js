const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const gql = require('graphql-tag');

const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    name: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  User: {
    __resolveReference(user) {
      return { id: user.id, name: "User " + user.id };
    },
  },
  Query: {
    users: () => [{ id: "1", name: "Alice" }, { id: "2", name: "Bob" }],
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

startStandaloneServer(server, {
  listen: { port: 4001 },
}).then(() => console.log('Users subgraph running at http://localhost:4001'));
