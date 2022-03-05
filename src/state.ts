export type ActionType = {
  type: string;
  payload: string | number | [] | {} | any[];
};

export interface CharacterType {
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    id: string;
  };
  origin: {
    name: string;
  };
}
