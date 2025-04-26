const { ApolloServer, gql } = require('apollo-server');
const { useServer } = require('graphql-ws/use/ws');  // Função correta do graphql-ws
const WebSocket = require('ws');
const http = require('http');
const { PubSub } = require('graphql-subscriptions');

// Definindo o esquema GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Subscription {
    counter: Int
  }
`;

let counter = 0;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
  Subscription: {
    counter: {
      subscribe: (_, __, { pubsub }) => {
        setInterval(() => {
          counter += 1;
          pubsub.publish('COUNTER_UPDATED', { counter });
        }, 1000); // Emitir um novo valor de counter a cada segundo
        return pubsub.asyncIterator('COUNTER_UPDATED');
      },
    },
  },
};

// Criando o servidor Apollo
const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    pubsub,
  }),
});

// Criando o servidor HTTP
const httpServer = http.createServer(server);

// Configuração do WebSocket com graphql-ws
const wsServer = new WebSocket.Server({
  server: httpServer,
  path: '/graphql',  // A URL que o cliente WebSocket deve acessar
});

// Usando a função `useServer` para configurar o WebSocket
useServer(
  {
    schema: server.schema,
    context: ({ connectionParams }) => ({ pubsub }),
  },
  wsServer
);

// Iniciando o servidor HTTP
httpServer.listen(4000, () => {
  console.log('🚀 HTTP Server ready at http://localhost:4000/graphql');
  console.log('📡 WebSocket Server ready at ws://localhost:4001/graphql');
});
