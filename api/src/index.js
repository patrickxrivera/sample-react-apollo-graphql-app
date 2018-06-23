const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (req) => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/public-nickelfairy-857/career-karma-api/dev',
      secret: 'mysecret123'
    })
  })
});

server.start(() => console.log(`GraphQL Server running on http://localhost:4000`));
