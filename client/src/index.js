import React from 'react';
import ApolloClient from 'apollo-boost';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
