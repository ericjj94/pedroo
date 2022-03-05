import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
          id
        }
      }
    }
  }
`;

export { GET_ALL_CHARACTERS };
