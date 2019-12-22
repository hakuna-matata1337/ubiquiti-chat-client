import { DISCONNECT_USER, SERVER_STATUS } from 'redux/types';

import Notice from 'components/reusables/Notice';

export const disconnect = () => dispatch => {
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
};

export const connect = () => dispatch => {
  dispatch({
    type: SERVER_STATUS,
    payload: true,
  });
};
