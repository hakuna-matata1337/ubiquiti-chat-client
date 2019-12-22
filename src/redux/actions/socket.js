import { CREATE_USER_SOCKET } from 'redux/types';

import io from 'socket.io-client';

import config from 'config.json';
import Notice from 'components/reusables/Notice';

// Actions
import { setNickname, receiveMessage, disconnectUser } from './user';
import { newUserJoin, userLeft, userList } from './online';
import { disconnect, connect } from './server';

export const connection = () => dispatch => {
  const socket = io(config.server);

  dispatch({
    type: CREATE_USER_SOCKET,
    payload: socket,
  });

  dispatch(setSocketListeners(socket));
};

const setSocketListeners = socket => dispatch => {
  // User
  socket.on('set nickname', response => dispatch(setNickname(response)));
  socket.on('global message', response => dispatch(receiveMessage(response)));
  socket.on('disconnect user', response => dispatch(disconnectUser(response)));

  // Online
  socket.on('user left', response => dispatch(userLeft(response)));
  socket.on('new user join', response => dispatch(newUserJoin(response)));
  socket.on('users list', response => dispatch(userList(response)));

  // Server
  socket.on('notification', response => Notice(response));
  socket.on('disconnect', () => dispatch(disconnect()));
  socket.on('connect', () => dispatch(connect()));
};
