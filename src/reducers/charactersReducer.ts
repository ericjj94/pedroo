import { CharacterType, ActionType } from "../state";

const initialState = {
  characters: [],
};

interface CharacterReducerInterface {
  characters: CharacterType[];
}

const charactersReducer = (state: CharacterReducerInterface = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_CHARACTERS": {
      return {
        ...state,
        characters: action.payload,
      };
    }
    default:
      return state;
  }
};
export default charactersReducer;
