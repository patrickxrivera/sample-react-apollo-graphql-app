import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Nav,
  Phone,
  Test,
  Home,
  Threads,
  Thread,
  Login,
  CreateThread,
  CreatePeerCircle,
  Wrapper
} from 'shared';

const App = () => (
  <Wrapper>
    <Phone>
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
    </Phone>
  </Wrapper>
);

export default App;
