const user = async (root, args, ctx, info) =>
  ctx.db.query.user({ where: { id: root.user.id } }, info);

module.exports = { user };
