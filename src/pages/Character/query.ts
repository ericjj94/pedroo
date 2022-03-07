import { gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      location {
        name
        id
      }
      image
      created
      episode {
        name
        air_date
        id
      }
    }
  }
`;

export { GET_CHARACTER_BY_ID };
