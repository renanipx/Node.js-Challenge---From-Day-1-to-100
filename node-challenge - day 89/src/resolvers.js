const resolvers = {
  Query: {
    info: () => 'GraphQL Subscriptions com Redis',
  },

  Subscription: {
    messageSent: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(['MESSAGE_SENT']),
    },
  },
};

module.exports = resolvers;
