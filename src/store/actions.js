import superagent from "superagent";
const baseUrl = "http://localhost:4000";

//add  error:
export const displayError = payload => {
  return {
    type: "ERROR_MESSAGE",
    payload
  };
};
// remove error:
export const removeError = () => {
  return {
    type: "REMOVE_ERROR"
  };
};
// error handling function
const errorHandling = async (dispatch, error) => {
  if (error.response) {
    await dispatch(removeError());
    if (error.response.body && error.response.body.message) {
      const errorMessage = displayError(error.response.body.message);
      return dispatch(errorMessage);
    } else if (error.response.body) {
      const validationError = displayError(error.response.body);
      return dispatch(validationError);
    }
  }
  console.error(error);
};

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
