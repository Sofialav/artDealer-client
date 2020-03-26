import superagent from "superagent";
import { errorHandling } from "./errors";
const baseUrl = "http://localhost:4000";

// loading artworks
export const ARTWORKS_FETCHED = "ARTWORKS_FETCHED";
const artworksFetched = artworks => ({
  type: ARTWORKS_FETCHED,
  artworks
});
export const loadArtworks = limitValue => async (dispatch, getState) => {
  try {
    if (getState().artworks.total) return;
    const response = await superagent
      .get(`${baseUrl}/artworks`)
      .query({ limit: limitValue });
    const action = artworksFetched(response.body);
    dispatch(action);
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// loading artists
export const ARTISTS_FETCHED = "ARTISTS_FETCHED";
const artistsFetched = artists => ({
  type: ARTISTS_FETCHED,
  artists
});
export const loadArtists = limitValue => async (dispatch, getState) => {
  try {
    if (getState().artists.total) return;
    const response = await superagent
      .get(`${baseUrl}/artists`)
      .query({ limit: limitValue });
    const action = artistsFetched(response.body);
    dispatch(action);
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
