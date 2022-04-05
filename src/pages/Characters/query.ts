import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        status
        image
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
