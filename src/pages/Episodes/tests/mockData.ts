import { GET_ALL_EPISODES } from "../query";

export const mockEpisodesData = {
  request: {
    query: GET_ALL_EPISODES,
    variables: { page: 1 },
  },
  result: {
    data: {
      episodes: {
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

export const columns = [
  {
    id: "name",
    name: "Name",
    enableSort: true,
    align: "center",
  },
  {
    id: "air_date",
    name: "Air Date",
    enableSort: true,
    align: "center",
  },
  {
    id: "episode",
    name: "Episode",
    enableSort: true,
    align: "center",
  },
  {
    id: "action",
    name: "Action",
    enableSort: true,
  },
];

export const sampleRow = [{ air_date: "Sun Nov 12 2003", episode: "SO1EO1", id: 1, name: "SOME EPISODE" }];
