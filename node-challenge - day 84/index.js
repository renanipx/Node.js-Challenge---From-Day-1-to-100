import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import createLoaders from './dataloader.js';

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);
  });
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    loaders: createLoaders()
  }),
});

await server.start();
server.applyMiddleware({ app });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
});
