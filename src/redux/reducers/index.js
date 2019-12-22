import { combineReducers } from 'redux';

import socket from 'redux/reducers/socket';
import user from 'redux/reducers/user';
import messages from 'redux/reducers/messages';
import online from 'redux/reducers/online';
import server from 'redux/reducers/server';

export default combineReducers({
  socket,
  user,
  messages,
  online,
  server,
});
