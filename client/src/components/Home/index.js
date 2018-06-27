import React from 'react';

import { PeerCircles, LandingPage } from 'shared';
import { AUTH_TOKEN } from 'helpers/constants';

const Home = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return <div>{authToken ? <PeerCircles /> : <LandingPage />}</div>;
};

export default Home;
