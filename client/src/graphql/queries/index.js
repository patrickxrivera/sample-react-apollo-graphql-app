import gql from 'graphql-tag';

export const GET_PEER_CIRCLES = gql`
  {
    getPeerCircles {
      id
      name
      description
    }
  }
`;
