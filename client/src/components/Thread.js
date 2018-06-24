import React from 'react';
import { Link } from 'react-router-dom';

const getPrevPath = (pathname) =>
  pathname
    .split('/')
    .slice(0, -1)
    .join('/');

const Thread = (props) => {
  const { pathname } = props.location;
  const { title, author, body, comments, peerCircleId } = props.location.state;

  return (
    <div key={title}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By: {author.name}</p>
      <hr />
      <div>{comments.map(renderComment)}</div>
      <Link
        to={{
          pathname: getPrevPath(pathname),
          state: {
            id: peerCircleId
          }
        }}>
        <button>Back</button>
      </Link>
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
