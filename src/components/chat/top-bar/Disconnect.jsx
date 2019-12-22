import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Disconnect = ({ socket, session }) => {
  const [timer, setTimer] = useState(session);

  useEffect(() => {
    const timeOut = setTimeout(() => setTimer(timer - 1), 1000);

    return () => clearTimeout(timeOut);
  }, [timer]);

  useEffect(() => {
    if (socket) {
      socket.on('session update', response => {
        setTimer(response);
      });
    }

    return () => socket && socket.off('session update');
  }, [socket]);

  return (
    <div className='disconnect' onClick={() => socket.emit('disconnect user')}>
      <div className='title'>disconnect</div>
      <div className='session-expire'>
        inactivity will result in disconnect ({timer} sec)
      </div>
    </div>
  );
};

Disconnect.propTypes = {
  socket: PropTypes.object,
  session: PropTypes.number,
};

const mapStateToProps = state => ({
  socket: state.socket,
  session: state.user.session,
});

export default connect(mapStateToProps)(Disconnect);
