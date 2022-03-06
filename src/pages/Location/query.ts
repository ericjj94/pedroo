import { gql } from "@apollo/client";

const GET_LOCATION_BY_ID = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
        name
        id
        image
      }
    }
  }
`;

export { GET_LOCATION_BY_ID };
