import io from 'socket.io-client';

import {
  SET_NICKNAME,
  RECEIVE_MESSAGE,
  DISCONNECT_USER,
  CREATE_USER_SOCKET,
} from 'redux/types';

import config from 'config.json';
import Notice from 'components/reusables/Notice';

export const createUserSocket = () => dispatch => {
  try {
    const socket = io(config.server);

    socket.on('notification', response => Notice(response));

    socket.on('set-nickname', response => {
      console.log('fire');
      dispatch({
        type: SET_NICKNAME,
        payload: response,
      });
    });

    socket.on('chat-message', response => {
      dispatch({
        type: RECEIVE_MESSAGE,
        payload: response,
      });
    });

    socket.on('disconnect', () => {
      Notice({
        type: 'danger',
        message: 'Woops, seems like we lost connection with the server.',
      });

      dispatch({
        type: DISCONNECT_USER,
      });
    });

    dispatch({
      type: CREATE_USER_SOCKET,
      payload: socket,
    });
  } catch (error) {
    Notice({
      title: 'error',
      message: 'A server error occured. Please try again later.',
    });
  }
};
