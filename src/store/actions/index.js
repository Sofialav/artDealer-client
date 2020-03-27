import superagent from "superagent";
import { errorHandling, removeError, displayError } from "./errors";
const baseUrl = "http://localhost:4000";

// loading artworks
export const ARTWORKS_FETCHED = "ARTWORKS_FETCHED";
const artworksFetched = artworks => ({
  type: ARTWORKS_FETCHED,
  artworks
});
export const loadArtworks = limitValue => async dispatch => {
  try {
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
export const loadArtists = limitValue => async dispatch => {
  try {
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
// signup
const addUser = () => {
  return {
    type: "ADD_USER"
  };
};
export function signup(data) {
  return async function(dispatch) {
    try {
      const response = await superagent.post(`${baseUrl}/artists`).send(data);
      await dispatch(addUser());
      await dispatch(removeError());
      if (response.status === 200) {
        dispatch(
          displayError(
            "Your account was successfully created. You may now login"
          )
        );
      }
    } catch (error) {
      errorHandling(dispatch, error);
    }
  };
}

// load art artForms
export const ARTFORMS_FETCHED = "ARTFORMS_FETCHED";
const artFormsFetched = artForms => ({
  type: ARTFORMS_FETCHED,
  artForms
});
export const loadArtForms = () => async (dispatch, getState) => {
  try {
    if (Object.keys(getState().artForms).length) return null;
    const response = await superagent.get(`${baseUrl}/artForms`);
    const action = artFormsFetched(response.body);
    dispatch(action);
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
