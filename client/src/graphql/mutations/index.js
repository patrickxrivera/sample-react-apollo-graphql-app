import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_THREAD = gql`
  mutation createThread($peerCircleId: ID!, $title: String!, $body: String!) {
    createThread(peerCircleId: $peerCircleId, title: $title, body: $body) {
      id
    }
  }
`;
