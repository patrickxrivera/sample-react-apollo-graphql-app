const { getUserId } = require('../../utils');

const createPeerCircle = (root, { name, description }, ctx, info) => {
  const userId = getUserId(ctx);

  return ctx.db.mutation.createPeerCircle(
    {
      data: {
        name,
        description,
        admin: { connect: { id: userId } }
      }
    },
    info
  );
};

const joinPeerCircle = (root, { peerCircleId }, ctx, info) => {
  const userId = getUserId(ctx);
  return {};
  // return ctx.db.mutation.
};

module.exports = {
  createPeerCircle
};
