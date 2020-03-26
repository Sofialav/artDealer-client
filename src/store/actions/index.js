import superagent from "superagent";
import { errorHandling, removeError } from "./errors";
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
    if (getState().artists.total) return null;
    const response = await superagent
      .get(`${baseUrl}/artists`)
      .query({ limit: limitValue });
    const action = artistsFetched(response.body);
    dispatch(action);
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// login
export const JWT = "JWT";
const loginUser = payload => ({
  type: JWT,
  payload
});
export function login(data, history) {
  return async function(dispatch) {
    try {
      const response = await superagent.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body.jwt);
      await dispatch(action);
      await dispatch(removeError());
      return history.push("/myPage");
    } catch (error) {
      errorHandling(dispatch, error);
    }
  };
}
