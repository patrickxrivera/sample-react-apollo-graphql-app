const { getUserId } = require('../../utils');

const getAllRepliesByUserId = (root, args, ctx, info) => {
  const userId = getUserId(ctx);

  return ctx.db.query.user({ where: { id: userId } }, info);
};

module.exports = {
  getAllRepliesByUserId
};
