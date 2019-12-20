import { SET_NICKNAME, DISCONNECT_USER } from 'redux/types';

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NICKNAME:
      return payload;
    case DISCONNECT_USER:
      return null;
    default:
      return state;
  }
};
