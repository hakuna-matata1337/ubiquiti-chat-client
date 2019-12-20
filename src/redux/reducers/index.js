import { combineReducers } from 'redux';

import socket from 'redux/reducers/socket';
import nickname from 'redux/reducers/nickname';
import messages from 'redux/reducers/messages';

export default combineReducers({
  socket,
  nickname,
  messages,
});
