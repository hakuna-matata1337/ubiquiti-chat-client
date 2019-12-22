import { SET_NICKNAME, DISCONNECT_USER, UPDATE_SESSION } from 'redux/types';

const initialState = {
  nickname: null,
  connected: null,
  session: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NICKNAME:
      return {
        ...state,
        nickname: payload.nickname,
        connected: payload.time,
        session: payload.session,
      };
    case DISCONNECT_USER:
      return {
        ...state,
        nickname: null,
        connected: null,
        session: null,
      };
    case UPDATE_SESSION:
      return {
        ...state,
        session: payload,
      };
    default:
      return state;
  }
};
