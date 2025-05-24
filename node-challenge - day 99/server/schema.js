const { gql } = require('apollo-server-express');

let todos = [];

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!): Todo!
  }
`;

const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo: (_, { text }) => {
      const newTodo = { id: Date.now().toString(), text, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
  },
};

module.exports = { typeDefs, resolvers };
