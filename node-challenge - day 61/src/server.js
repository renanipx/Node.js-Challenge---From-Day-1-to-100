const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    // Log the error internally (e.g., to a monitoring service)
    console.error(error);

    // Return a simplified error message to the client
    return {
      message: error.message,
      code: error.extensions.code || 'INTERNAL_SERVER_ERROR',
      // You could also add custom fields like `path` or `timestamp` here if needed
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
