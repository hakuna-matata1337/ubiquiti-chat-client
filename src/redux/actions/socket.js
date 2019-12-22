import io from 'socket.io-client';

import {
  SET_NICKNAME,
  RECEIVE_MESSAGE,
  DISCONNECT_USER,
  CREATE_USER_SOCKET,
  SET_ONLINE_USERS,
  SET_NEW_ONLINE_USER,
  REMOVE_ONLINE_USER,
  SERVER_STATUS,
  UPDATE_SESSION,
} from 'redux/types';

import config from 'config.json';
import Notice from 'components/reusables/Notice';

export const connection = () => dispatch => {
  const socket = io(config.server);

  dispatch({
    type: CREATE_USER_SOCKET,
    payload: socket,
  });

  dispatch(setSocketListeners(socket));
};

const setSocketListeners = socket => dispatch => {
  socket.on('notification', Notice);

  socket.on('set nickname', response => {
    Notice({
      type: 'success',
      message: `Welcome ${response.nickname}! 🙂`,
    });

    dispatch({
      type: SET_NICKNAME,
      payload: response,
    });
  });

  socket.on('global message', response => {
    dispatch({
      type: RECEIVE_MESSAGE,
      payload: response,
    });
  });

  socket.on('users list', response => {
    dispatch({
      type: SET_ONLINE_USERS,
      payload: response,
    });
  });

  socket.on('new user join', response => {
    dispatch({
      type: SET_NEW_ONLINE_USER,
      payload: response,
    });
  });

  socket.on('session update', response => {
    dispatch({
      type: UPDATE_SESSION,
      payload: response,
    });
  });

  socket.on('user left', response => {
    Notice({
      type: 'danger',
      message: `User ${response.nickname} ${
        response.type === 'self'
          ? 'left the chat'
          : response.type === 'server'
          ? 'was disconnected'
          : 'was disconnected due to inactivity'
      }`,
    });

    dispatch({
      type: REMOVE_ONLINE_USER,
      payload: response.nickname,
    });
  });

  socket.on('disconnect user', type => {
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
  });

  socket.on('disconnect', () => {
    Notice({
      type: 'danger',
      message: 'Seems like the server went down. Sorry for the inconvenience.',
    });

    dispatch({
      type: DISCONNECT_USER,
    });

    dispatch({
      type: SERVER_STATUS,
      payload: false,
    });
  });

  socket.on('connect', () => {
    dispatch({
      type: SERVER_STATUS,
      payload: true,
    });
  });
};
