import { gql } from "@apollo/client";

const GET_ALL_LOCATIONS = gql`
  query LOCATIONS {
    locations(page: 1) {
      info {
        pages
      }
      results {
        name
        type
        dimension
        created
      }
    }
  }
`;

export { GET_ALL_LOCATIONS };
