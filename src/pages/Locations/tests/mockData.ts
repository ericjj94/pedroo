import { GET_ALL_LOCATIONS } from "../query";

export const mockLocationData = {
  request: {
    query: GET_ALL_LOCATIONS,
    variables: { page: 1 },
  },
  result: {
    data: {
      locations: {
        info: {
          pages: 10,
        },
        results: [
          {
            id: 1,
            name: "Earth",
            type: "Planet",
            dimension: "Dimension C-137",
            created: "2017-11-10T12:42:04.162Z",
          },
        ],
      },
    },
  },
};

export const mockErrorData = {
  request: {
    query: GET_ALL_LOCATIONS,
    variables: { page: 1 },
  },
  error: new Error("Network error"),
};

export const sampleRow = [
  {
    created: "Fri Nov 10 2017",
    dimension: "Dimension C-137",
    id: 1,
    name: "Earth",
    type: "Planet",
  },
];
