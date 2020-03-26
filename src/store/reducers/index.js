import { combineReducers } from "redux";
import artworks from "./artworks";
import errors from "./errors";

export default combineReducers({
  artworks,
  errors
});
