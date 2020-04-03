import { ARTWORK_TO_CART } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case ARTWORK_TO_CART:
      const artworkId = action.payload.id;
      const duplicate = state.find(obj => obj.id === artworkId);
      if (duplicate) {
        return [...state];
      }
      return [...state, action.payload];

    default:
      return state;
  }
}
