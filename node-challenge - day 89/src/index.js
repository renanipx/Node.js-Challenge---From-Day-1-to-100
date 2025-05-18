const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const { ApolloServer, gql } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { PubSub } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');

const pubsub = new PubSub();

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Subscription {
    messageSent: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator(["MESSAGE_SENT"]),
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const httpServer = createServer();

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

SubscriptionServer.create(
  {
    execute,
    subscribe,
    schema,
    onConnect: () => {
      console.log('Client connected');
    },
  },
  {
    server: wsServer,
    path: '/graphql',
  }
);

const server = new ApolloServer({
  schema,
  subscriptions: {
    path: '/graphql',
  },
});

async function start() {
  await server.listen({ port: 4000 });

  console.log(`🚀 Servidor HTTP rodando em http://localhost:4000`);
  console.log(`📡 WebSocket Subscriptions em ws://localhost:4000/graphql`);
}

start();

setInterval(() => {
  pubsub.publish("MESSAGE_SENT", { messageSent: "Mensagem enviada!" });
}, 5000);
