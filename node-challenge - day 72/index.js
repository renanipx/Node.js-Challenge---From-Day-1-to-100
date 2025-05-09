const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema').typeDefs;
const resolvers = require('./schema').resolvers;
const rateLimitMiddleware = require('./rateLimit');

async function startServer() {
  const app = express();

  // Apply rate limiting globally
  app.use(rateLimitMiddleware);

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
