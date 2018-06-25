import React from 'react';
import { Query } from 'react-apollo';
import { isEmpty } from 'ramda';
import { Link } from 'react-router-dom';

import { GET_PEER_CIRCLES } from '../graphql/queries';
import { handleNoData } from '../utils';

const PeerCircles = () => <Query query={GET_PEER_CIRCLES}>{handlePeerCircles}</Query>;

const handlePeerCircles = ({ loading, error, data }) =>
  isEmpty(data) ? handleNoData(loading, error) : renderPeerCircles(data);

const renderPeerCircles = ({ getAllPeerCircles }) => [
  <h1 key={1}>All Peer Circles:</h1>,
  <Link to="/peer-circle/new" key={2}>
    <button>Create Peer Circle</button>
  </Link>,
  getAllPeerCircles.map(renderPeerCircle)
];

const renderPeerCircle = ({ id, name, description }) => (
  <div key={id}>
    <h2>{name}</h2>
    <p>{description}</p>
    <Link
      to={{
        pathname: `/${name.toLowerCase()}/threads`,
        state: {
          name,
          id
        }
      }}>
      <button>See Threads</button>
    </Link>
    <hr />
  </div>
);

export default PeerCircles;
