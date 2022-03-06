import { gql } from "@apollo/client";

const GET_ALL_EPISODES = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        pages
      }
      results {
        name
        air_date
        episode
      }
    }
  }
`;

export { GET_ALL_EPISODES };
