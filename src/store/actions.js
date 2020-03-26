import superagent from "superagent";
const baseUrl = "http://localhost:4000";

// loading artworks
export const ARTWORKS_FETCHED = "ARTWORKS_FETCHED";
const artworksFetched = artworks => ({
  type: ARTWORKS_FETCHED,
  artworks
});
export const loadArtworks = limitValue => async (dispatch, getState) => {
  try {
    if (getState().artworks) return;
    const response = await superagent
      .get(`${baseUrl}/artworks`)
      .query({ limit: limitValue });
    const action = artworksFetched(response.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
