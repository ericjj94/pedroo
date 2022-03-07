import { GET_EPISODE_BY_ID } from "../query";

export const mockEpisodeData = {
  request: {
    query: GET_EPISODE_BY_ID,
    variables: { id: 1 },
  },
  result: {
    data: {
      episode: {
        episode: "S01E01",
        id: "1",
        name: "Pilot",
        air_date: "December 2, 2013",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            status: "Alive",
          },
        ],
      },
    },
  },
};
