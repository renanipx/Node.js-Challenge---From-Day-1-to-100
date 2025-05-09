const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const gql = require('graphql-tag');

const typeDefs = gql`
  type Product @key(fields: "id") {
    id: ID!
    name: String
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Product: {
    __resolveReference(product) {
      return { id: product.id, name: "Product " + product.id };
    },
  },
  Query: {
    products: () => [{ id: "100", name: "Book" }, { id: "101", name: "Pen" }],
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

startStandaloneServer(server, {
  listen: { port: 4002 },
}).then(() => console.log('Products subgraph running at http://localhost:4002'));
