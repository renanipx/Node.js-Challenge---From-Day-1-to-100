const { stitchSchemas } = require('@graphql-tools/stitch');
const { ApolloServer } = require('apollo-server');
const { delegateToSchema } = require('@graphql-tools/delegate');

const userSchema = require('./userSchema');
const postSchema = require('./postSchema');

const gatewaySchema = stitchSchemas({
    subschemas: [
        { schema: userSchema },
        { schema: postSchema },
    ],
    typeDefs: `
    extend type User {
      posts: [Post]
    }
  `,
    resolvers: {
        User: {
            posts: {
                selectionSet: `{ id }`,
                resolve(user, args, context, info) {
                    return delegateToSchema({
                        schema: postSchema,
                        operation: 'query',
                        fieldName: 'postsByUser',
                        args: { userId: user.id },
                        context,
                        info,
                    });
                },
            },
        },
    },
});

const server = new ApolloServer({ schema: gatewaySchema });

server.listen().then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
});