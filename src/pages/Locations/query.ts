import { gql } from "@apollo/client";

const GET_ALL_LOCATIONS = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`;

export { GET_ALL_LOCATIONS };
