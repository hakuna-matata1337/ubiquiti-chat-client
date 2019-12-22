import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateSession } from 'redux/actions/session';

const Disconnect = ({ socket, session, updateSession }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => updateSession(session - 1), 1000);

    return () => clearTimeout(timeOut);
  }, [session, updateSession]);

  return (
    <div className='disconnect' onClick={() => socket.emit('disconnect user')}>
      <div className='title'>disconnect</div>
      <div className='session-expire'>
        inactivity will result in disconnect ({session} sec)
      </div>
    </div>
  );
};

Disconnect.propTypes = {
  socket: PropTypes.object,
  session: PropTypes.number,
  updateSession: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  socket: state.socket,
  session: state.user.session,
});

export default connect(mapStateToProps, { updateSession })(Disconnect);
