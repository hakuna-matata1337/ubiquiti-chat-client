import { CREATE_USER_SOCKET } from 'redux/types';

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER_SOCKET:
      return payload;
    default:
      return state;
  }
};
