import { combineReducers } from "redux";
import errors from "./errors";
import artists from "./artists";
import artworks from "./artworks";
import jwt from "./jwt";
import genres from "./genres";

export default combineReducers({
  errors,
  artists,
  artworks,
  jwt,
  genres
});
