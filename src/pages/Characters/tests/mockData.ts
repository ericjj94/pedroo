import { GET_ALL_CHARACTERS } from "../query";

export const columns = [
  { id: "id", name: "SNo", enableSort: true, align: "center" },
  { id: "name", name: "Name", enableSort: true, align: "center" },
  { id: "status", name: "Status", enableSort: true, align: "center" },
  {
    id: "species",
    name: "Species",
    enableSort: true,
    align: "center",
  },
  { id: "gender", name: "gender", enableSort: true, align: "center" },
  { id: "origin", name: "Origin", enableSort: true, align: "center" },
  {
    id: "location",
    name: "Location",
    enableSort: true,
    align: "center",
  },
  { id: "action", name: "Action" },
];

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
