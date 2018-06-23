import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
