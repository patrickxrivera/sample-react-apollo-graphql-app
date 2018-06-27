import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Nav, Test, Home, Threads, Thread, Login, CreateThread, CreatePeerCircle } from 'shared';

const wrapper = {
  width: '800px',
  minHeight: '400px',
  margin: '2rem auto',
  border: '2px solid grey',
  padding: '1rem',
  color: 'rgb(66, 66, 65)',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica"
};

const App = () => (
  <div style={wrapper}>
    <Nav />
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/:peerCircle/threads" component={Threads} />
      <Route path="/:peerCircle/threads/new" component={CreateThread} />
      <Route path="/:peerCircle/threads/:id" component={Thread} />
      <Route path="/peer-circle/new" component={CreatePeerCircle} />
      <Route path="/test" component={Test} />
    </Switch>
  </div>
);

export default App;
