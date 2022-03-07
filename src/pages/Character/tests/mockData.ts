import { GET_CHARACTER_BY_ID } from "../query";

export const mockCharacterData = {
  request: {
    query: GET_CHARACTER_BY_ID,
    variables: { id: 1 },
  },
  result: {
    data: {
      character: {
        id: "1",
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        location: {
          name: "Citadel of Ricks",
          id: "3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        created: "2017-11-04T18:48:46.250Z",
        episode: [
          {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 1,
          },
        ],
      },
    },
  },
};

export const mockCharactersErrorData = {
  request: {
    query: GET_CHARACTER_BY_ID,
    variable: {
      id: 1,
    },
  },
  error: new Error("Network Error"),
};
