import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { isEmpty } from 'ramda';

import { handleNoData } from '../utils';
import { GET_THREADS_BY_PEER_CIRCLE_ID } from '../graphql/queries';

const Threads = ({ location: { state: { id }, pathname } }) => (
  <Query query={GET_THREADS_BY_PEER_CIRCLE_ID} variables={{ id }}>
    {handleThreads(pathname, id)}
  </Query>
);

const handleThreads = (pathname, peerCircleId) => ({ loading, error, data }) =>
  isEmpty(data) ? handleNoData(loading, error) : renderThreads(data, pathname, peerCircleId);

const renderThreads = (
  { getPeerCircleById: { admin, threads, name, description } },
  pathname,
  peerCircleId
) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
    <p>Admin: {admin.name}</p>
    <Link
      to={{
        pathname: `${pathname}/new`,
        state: {
          peerCircleId
        }
      }}>
      <button>Create Thread</button>
    </Link>
    <hr />
    {threads.map(renderThread(pathname, peerCircleId))}
    <Link to="/">
      <button>Back</button>
    </Link>
  </div>
);

const renderThread = (pathname, peerCircleId) => ({ id, title, author, comments, ...rest }) => (
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
          peerCircleId,
          ...rest
        }
      }}>
      <button>See Comments</button>
    </Link>
    <hr />
  </div>
);

export default Threads;
