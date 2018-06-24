const { getUserId } = require('../../utils');

const createThread = (root, { title, body, peerCircleId }, ctx, info) => {
  const userId = getUserId(ctx);

  return ctx.db.mutation.createThread(
    {
      data: {
        title,
        body,
        author: { connect: { id: userId } },
        peerCircle: { connect: { id: peerCircleId } }
      }
    },
    info
  );
};

module.exports = {
  createThread
};
