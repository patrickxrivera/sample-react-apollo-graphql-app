import React from 'react';

import PeerCircles from './PeerCircles';
import LandingPage from './LandingPage';
import { AUTH_TOKEN } from '../constants';

const Home = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return <div>{authToken ? <PeerCircles /> : <LandingPage />}</div>;
};

export default Home;
