const { ApolloServer, gql } = require('apollo-server'); // mudou aqui

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String!): Post
  }
`;

const resolvers = {
  Query: {
    getPost: (_, args) => ({
      id: args.id,
      title: "Mock Title",
      content: "Mock Content",
    }),
  },
  Mutation: {
    createPost: (_, args) => ({
      id: new Date().toISOString(),
      title: args.title,
      content: args.content,
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
