import gql from 'graphql-tag';

export const GET_PEER_CIRCLES = gql`
  {
    getAllPeerCircles {
      id
      name
      description
      admin {
        name
      }
      threads {
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
