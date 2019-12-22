import { RECEIVE_MESSAGE, DISCONNECT_USER } from 'redux/types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_MESSAGE:
      return [...state, payload].sort((a, b) => a.time - b.time);
    case DISCONNECT_USER:
      return [];
    default:
      return state;
  }
};
