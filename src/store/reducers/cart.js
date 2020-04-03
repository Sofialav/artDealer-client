import { ARTWORK_TO_CART, REMOVE_FROM_CART } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case ARTWORK_TO_CART:
      const artworkId = action.payload.id;
      const duplicate = state.find(obj => obj.id === artworkId);
      if (duplicate) {
        return state;
      }
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const artwork = state.find(obj => obj.id === action.id);
      if (artwork) {
        const result = state.filter(obj => obj.id !== action.id);
        return result;
      }
      return state;
    default:
      return state;
  }
}
