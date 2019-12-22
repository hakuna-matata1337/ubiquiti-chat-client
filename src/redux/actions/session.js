import { UPDATE_SESSION } from 'redux/types';

export const updateSession = num => dispatch => {
  dispatch({
    type: UPDATE_SESSION,
    payload: num,
  });
};
