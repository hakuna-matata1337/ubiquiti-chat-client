import { RECEIVE_MESSAGE } from 'redux/types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_MESSAGE:
      return [...state, payload];
    default:
      return state;
  }
};
