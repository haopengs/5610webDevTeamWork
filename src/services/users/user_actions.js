export const FETCH_USER_BY_ID_REQUEST = 'FETCH_USER_BY_ID_REQUEST';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

export const fetchUserByIdRequest = () => ({
  type: FETCH_USER_BY_ID_REQUEST,
});

export const fetchUserByIdSuccess = (user) => ({
  type: FETCH_USER_BY_ID_SUCCESS,
  payload: user,
});

export const fetchUserByIdFailure = (error) => ({
  type: FETCH_USER_BY_ID_FAILURE,
  payload: error,
});
