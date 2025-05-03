const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    posts: async () => await prisma.post.findMany(),
  },
  Mutation: {
    createPost: async (_, args) => {
      return await prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
        },
      });
    },
  },
};

module.exports = resolvers;
