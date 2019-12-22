import { SERVER_STATUS } from 'redux/types';

const initialState = false;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVER_STATUS:
      return payload;
    default:
      return state;
  }
};
