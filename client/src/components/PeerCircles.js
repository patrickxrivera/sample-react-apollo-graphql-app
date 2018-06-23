import React from 'react';
import { Query } from 'react-apollo';

import { GET_PEER_CIRCLES } from '../graphql/queries';

const PeerCircles = () => <Query query={GET_PEER_CIRCLES}>{handlePeerCircles}</Query>;

const handlePeerCircles = ({ loading, error, data }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

  return renderPeerCircles(data);
};

const renderPeerCircles = ({ getPeerCircles }) => <div>{getPeerCircles.map(renderPeerCircle)}</div>;

const renderPeerCircle = ({ id, name, description }) => (
  <div key={id}>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

export default PeerCircles;
