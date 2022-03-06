import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      location {
        name
        type
        dimension
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

export { GET_CHARACTER };
