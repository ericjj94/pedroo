import { ActionType } from "../state";

const initialState = {
  isLoading: false,
};

interface GlobalReducerInterface {
  isLoading: boolean;
}

const globalsReducer = (state: GlobalReducerInterface = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
export default globalsReducer;
