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

const deletePeerCircle = (root, { id }, ctx, info) =>
  ctx.db.mutation.deletePeerCircle({ where: { id } }, info);

module.exports = {
  createPeerCircle,
  deletePeerCircle
};
