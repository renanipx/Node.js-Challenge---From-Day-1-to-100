const { ApolloServer } = require('apollo-server');
const userLoader = require('./loaders/userLoader');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    loaders: {
      userLoader,
    },
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
