import { gql } from "@apollo/client";

const GET_EPISODE_BY_ID = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      episode
      id
      name
      air_date
      characters {
        id
        name
        image
      }
    }
  }
`;

export { GET_EPISODE_BY_ID };
