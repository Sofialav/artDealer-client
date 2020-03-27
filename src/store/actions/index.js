import superagent from "superagent";
import { errorHandling } from "./errors";

export const baseUrl = "http://localhost:4000";

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
// loading art artForms
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
// loading artist info
export const ARTIST_FETCHED = "ARTIST_FETCHED";
const artistFetched = artist => ({
  type: ARTIST_FETCHED,
  artist
});
export const loadArtist = jwt => async dispatch => {
  const reqHeader = "Bearer " + jwt;
  try {
    const artist = await superagent
      .get(`${baseUrl}/artists/loggedArtist`)
      .set("Authorization", reqHeader);
    dispatch(artistFetched(artist.body));
  } catch (error) {
    console.error(error);
  }
};
