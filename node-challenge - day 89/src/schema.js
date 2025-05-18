const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    info: String
  }

  type Subscription {
    messageSent: String
  }
`;

module.exports = typeDefs;
