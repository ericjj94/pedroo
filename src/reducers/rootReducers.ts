import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import globalsReducer from "./globalsReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  globals: globalsReducer,
});
export default rootReducer;
