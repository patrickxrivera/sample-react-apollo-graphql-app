import gql from 'graphql-tag';

export const GET_PEER_CIRCLES = gql`
  {
    getAllPeerCircles {
      id
      name
      description
    }
  }
`;

export const GET_THREADS_BY_PEER_CIRCLE_ID = gql`
  query getPeerCircleById($id: ID!) {
    getPeerCircleById(id: $id) {
      id
      name
      description
      admin {
        name
      }
      threads {
        id
        title
        author {
          name
        }
        body
        comments {
          text
          likes
          author {
            name
          }
        }
      }
    }
  }
`;
