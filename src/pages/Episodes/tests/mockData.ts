import { GET_ALL_EPISODES } from "../query";

export const mockEpisodesData = {
  request: {
    query: GET_ALL_EPISODES,
    variables: { page: 1 },
  },
  result: {
    data: {
      episodes: {
        info: {
          pages: 10,
        },
        results: [
          {
            id: 1,
            name: "SOME EPISODE",
            air_date: "Sun Nov 12 2003",
            episode: "SO1EO1",
          },
        ],
      },
    },
  },
};

export const mockErrorData = {
  request: {
    query: GET_ALL_EPISODES,
    variables: { page: 1 },
  },
  error: new Error("Network error"),
};

export const sampleRow = [{ air_date: "Sun Nov 12 2003", episode: "SO1EO1", id: 1, name: "SOME EPISODE" }];
