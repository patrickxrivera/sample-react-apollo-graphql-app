import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Threads from './Threads';
import Thread from './Thread';
import Nav from './Nav';

const wrapper = {
  width: '800px',
  margin: '2rem auto',
  border: '2px solid grey',
  padding: '1rem'
};

const App = () => (
  <div style={wrapper}>
    <Nav />
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:peerCircle/threads" component={Threads} />
      <Route path="/:peerCircle/threads/:id" component={Thread} />
    </Switch>
  </div>
);

export default App;
