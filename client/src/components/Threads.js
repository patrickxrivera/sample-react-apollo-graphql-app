import React from 'react';
import { Link } from 'react-router-dom';

const Threads = (props) => {
  const { pathname } = props.location;
  const { admin, threads, name, id } = props.location.state;

  return (
    <div>
      <h1>Threads for {name}</h1>
      <h4>Admin: {admin.name}</h4>
      <hr />
      {threads.map(renderThread(pathname, id))}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

const renderThread = (pathname, id) => ({ title, author, comments, ...rest }) => (
  <div key={title}>
    <h3>{title}</h3>
    <p>By: {author.name}</p>
    <p>{comments.length === 1 ? `${comments.length} comment` : `${comments.length} comments`}</p>
    <Link
      to={{
        pathname: `${pathname}/${id}`,
        state: {
          comments,
          title,
          author,
          ...rest
        }
      }}>
      <button>See Comments</button>
    </Link>
    <hr />
  </div>
);

export default Threads;
