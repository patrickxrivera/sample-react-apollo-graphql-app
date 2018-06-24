import React from 'react';

import { Link } from 'react-router-dom';

const Thread = (props) => {
  const { title, author, body, comments, prevPath } = props.location.state;

  return (
    <div key={title}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By: {author.name}</p>
      <hr />
      <div>{comments.map(renderComment)}</div>
    </div>
  );
};

const renderComment = ({ author, likes, text }) => (
  <div key={`${text}`}>
    <p>{text}</p>
    <div style={{ display: 'flex' }}>
      <p>
        {author.name} | {likes} likes
      </p>
    </div>
    <hr />
  </div>
);

export default Thread;
