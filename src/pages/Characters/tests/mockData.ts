import { GET_ALL_CHARACTERS } from "../query";

export const sampleRow = [
  {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: "Earth (C-137)",
    location: "SOME location",
  },
];

export const mockCharactersData = {
  request: {
    query: GET_ALL_CHARACTERS,
    variables: { page: 1 },
  },
  result: {
    data: {
      characters: {
        info: {
          pages: 10,
        },
        results: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            origin: {
              name: "Earth (C-137)",
            },
            location: {
              name: "SOME location",
              id: 1,
            },
          },
        ],
      },
    },
  },
};

export const mockCharactersErrorData = {
  request: {
    query: GET_ALL_CHARACTERS,
    variable: {
      page: 1,
    },
  },
  error: new Error("Network Error"),
};
