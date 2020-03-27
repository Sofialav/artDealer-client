import { GENRES_FETCHED } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case GENRES_FETCHED:
      return action.genres;

    default:
      return state;
  }
}
