const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./resolvers');
const customMiddleware = require('./middleware');

const app = express();

// Use the custom middleware
app.use('/graphql', customMiddleware);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables the GraphiQL GUI
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
});
