import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default ({ title, message, type }) => {
  store.addNotification({
    title: title || '',
    message: message || 'No message provided.',
    type: type || 'default', // 'default', 'success', 'info', 'warning'
    container: 'bottom-right', // where to position the notifications
    animationIn: ['animated', 'fadeIn'], // animate.css classes that's applied
    animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true,
    },
    width: 300,
  });
};
