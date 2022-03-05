import { gql } from "@apollo/client";

const GET_ALL_EPISODES = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        pages
      }
      results {
        name
        episode
        id
        air_date
      }
    }
  }
`;

export { GET_ALL_EPISODES };
