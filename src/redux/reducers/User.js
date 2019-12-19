import { SET_NICKNAME, UNSET_NICKNAME } from 'redux/types';

const initialState = {
  nickname: localStorage.ubiNickname || null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NICKNAME:
      return {
        ...state,
        nickname: payload,
      };
    case UNSET_NICKNAME:
      return {
        ...state,
        nickname: null,
      };
    default:
      return state;
  }
};
