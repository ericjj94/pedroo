export type ActionType = {
  type: string;
  payload: string | number | [] | {} | any[];
};

export interface CharacterType {
  name: string;
  status: string;
  species: string;
  id: number;
  gender: string;

  image?: string;
  location: {
    name: string;
    id: string;
  };
  origin: {
    name: string;
  };
}

export interface EpisodeType {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
export interface LocationType {
  name: string;
  type: string;
  dimension: string;
  created: string;
  image?: string;
  id: number;
}
