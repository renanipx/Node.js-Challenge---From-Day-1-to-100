const { ApolloServer, gql } = require('apollo-server');

// Define the schema
typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    age: Int
  }
`;

// Sample data
const users = [
  { id: '1', name: 'Alice', age: 25 },
  { id: '2', name: 'Bob', age: 30 }
];

// Define the resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    users: () => users
  }
};

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
