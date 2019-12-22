import {
  SET_NEW_ONLINE_USER,
  REMOVE_ONLINE_USER,
  SET_ONLINE_USERS,
} from 'redux/types';

import Notice from 'components/reusables/Notice';

export const newUserJoin = response => dispatch => {
  Notice({
    type: 'info',
    message: `${response.nickname} just joined the chat.`,
  });

  dispatch({
    type: SET_NEW_ONLINE_USER,
    payload: response,
  });
};

export const userLeft = ({ nickname, type }) => dispatch => {
  let message;
  switch (type) {
    case 'self':
      message = `${nickname} just left the chat.`;
      break;
    case 'server':
      message = `${nickname} just got disconnected.`;
      break;
    default:
      message = `${nickname} just got disconnected due to inactivity.`;
  }

  Notice({
    type: 'danger',
    message,
  });

  dispatch({
    type: REMOVE_ONLINE_USER,
    payload: nickname,
  });
};

export const userList = response => dispatch => {
  dispatch({
    type: SET_ONLINE_USERS,
    payload: response,
  });
};
