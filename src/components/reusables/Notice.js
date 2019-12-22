import PropTypes from 'prop-types';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const Notice = ({ title, message, type }) => {
  const types = ['default', 'success', 'info', 'warning', 'danger'];

  store.addNotification({
    title: title || '',
    message: message || 'No message provided.',
    type: types.includes(type) ? type : types[0], // 'default', 'success', 'info', 'warning', 'danger'
    container: 'bottom-left', // where to position the notifications
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

Notice.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.string,
};

export default Notice;
