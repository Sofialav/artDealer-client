import { ARTIST_FETCHED } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ARTIST_FETCHED:
      return action.artist;
    default:
      return state;
  }
}
