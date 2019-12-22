import {
  SET_NICKNAME,
  RECEIVE_MESSAGE,
  DISCONNECT_USER,
  // CREATE_USER_SOCKET,
} from 'redux/types';

import Notice from 'components/reusables/Notice';

export const setNickname = response => dispatch => {
  Notice({
    type: 'success',
    message: `Welcome ${response.nickname}! 🙂`,
  });

  dispatch({
    type: SET_NICKNAME,
    payload: response,
  });
};

export const receiveMessage = response => dispatch => {
  dispatch({
    type: RECEIVE_MESSAGE,
    payload: response,
  });
};

export const disconnectUser = type => dispatch => {
  Notice({
    type: 'warning',
    message:
      type === 'inactivity'
        ? 'You have been disconnected due to inactivity'
        : 'You are now disconnected from the chat.',
  });

  dispatch({
    type: DISCONNECT_USER,
  });
};
