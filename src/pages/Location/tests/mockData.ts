import { GET_LOCATION_BY_ID } from "../query";

export const mockLocationData = {
  request: {
    query: GET_LOCATION_BY_ID,
    variables: { id: 1 },
  },
  result: {
    data: {
      location: {
        id: 1,
        name: "Earth (C-137)",
        type: "Planet",
        dimension: "Dimension C-137",
        created: "2017-11-10T12:42:04.162Z",
        residents: [
          {
            name: "Beth Smith",
            id: 38,
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
          },
        ],
      },
    },
  },
};
