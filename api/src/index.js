const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    info: () => 'API is running',
    getPeerCircles: (root, args, ctx, info) => ctx.db.query.peerCircles({}, info),
    getPeerCircle: (root, { id }, ctx, info) => ctx.db.mutation.peerCircle({ id })
  },

  Mutation: {
    createPeerCircle: (_, { name }) => {
      const newPeerCircle = {
        id: idCount++,
        threads: [],
        name
      };

      peerCircles.push(newPeerCircle);

      return newPeerCircle;
    },

    deletePeerCircle: (_, { id }) => {
      let deletedPeerCircle = null;

      peerCircles.forEach((p) => {
        if (p.id === id) {
          deletedPeerCircle = p;
        }
      });

      peerCircles = peerCircles.filter((p) => p.id === id);

      return deletedPeerCircle;
    },

    updatePeerCircle: (_, { id, name }) => {
      let updatedPeerCircle = null;

      peerCircles = peerCircles.map((p) => {
        if (p.id !== id) {
          return p;
        }
        updatedPeerCircle = {
          id,
          name
        };
        return updatedPeerCircle;
      });

      return updatedPeerCircle;
    }
  }
};

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
