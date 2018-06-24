const { getUserId } = require('../../utils');

const createComment = (root, { text, threadId }, ctx, info) => {
  const userId = getUserId(ctx);

  return ctx.db.mutation.createComment(
    {
      data: {
        text,
        author: { connect: { id: userId } },
        thread: { connect: { id: threadId } },
        likes: 0
      }
    },
    info
  );
};

module.exports = {
  createComment
};
