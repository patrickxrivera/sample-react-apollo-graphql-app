const { GraphQLServer } = require('graphql-yoga');

let idCount = 4;

let peerCircles = [
  {
    id: '1',
    name: 'Job Search',
    threads: []
  },
  {
    id: '2',
    name: 'Code Buddies',
    threads: []
  },
  {
    id: '3',
    name: 'Buidl',
    threads: []
  }
];

const resolvers = {
  Query: {
    info: () => 'API is running',
    getPeerCircles: () => peerCircles,
    getPeerCircle: (_, { id }) => peerCircles.filter((p) => p.id === id)[0]
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
  resolvers
});

server.start(() => console.log(`GraphQL Server running on http://localhost:4000`));
