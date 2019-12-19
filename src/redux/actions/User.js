import { SET_NICKNAME, UNSET_NICKNAME } from 'redux/types';
import Notice from 'components/reusables/Notice';

export const setNickname = nickname => async dispatch => {
  // try {
  //   if (data.error) {
  //     return Notice({
  //       message: data.error,
  //       type: 'danger',
  //     });
  //   }
  //   Notice({ message: `Welcome to the chat, ${nickname}!`, type: 'success' });
  //   dispatch({
  //     type: SET_NICKNAME,
  //     payload: nickname,
  //   });
  //   localStorage.ubiNickname = nickname;
  // } catch (_) {
  //   Notice({
  //     message: 'Looks like our servers are down. Please try again in a second!',
  //     type: 'danger',
  //   });
  // }
};

export const disconnect = nickname => async dispatch => {
  // try {
  //   if (data.error) {
  //     return Notice({
  //       message: data.error,
  //       type: 'danger',
  //     });
  //   }
  //   Notice({ message: `We will miss you, ${nickname}!`, type: 'info' });
  //   dispatch({
  //     type: UNSET_NICKNAME,
  //   });
  //   delete localStorage.ubiNickname;
  // } catch (_) {
  //   Notice({
  //     message: 'Looks like our servers are down. Please try again in a second!',
  //     type: 'danger',
  //   });
  // }
};
