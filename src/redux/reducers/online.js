import {
  SET_ONLINE_USERS,
  SET_NEW_ONLINE_USER,
  REMOVE_ONLINE_USER,
  DISCONNECT_USER,
} from 'redux/types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ONLINE_USERS:
      return payload.sort((a, b) => b.time - a.time);
    case SET_NEW_ONLINE_USER:
      return [...state, payload].sort((a, b) => b.time - a.time);
    case REMOVE_ONLINE_USER:
      return [...state]
        .filter(user => user.nickname !== payload)
        .sort((a, b) => b.time - a.time);
    case DISCONNECT_USER:
      return [];
    default:
      return state;
  }
};
