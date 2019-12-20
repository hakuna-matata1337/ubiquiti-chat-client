import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Chat = ({ nickname, socket, messages }) => {
  const history = useHistory();

  useEffect(() => {
    if (!nickname) {
      history.push('/');
    }
  }, [nickname, history]);

  return (
    <main className='chat'>
      <div>
        chat{' '}
        <button onClick={() => socket.emit('disconnect', nickname)}>
          Disconnect
        </button>
      </div>
    </main>
  );
};

Chat.propTypes = {
  nickname: PropTypes.string,
  socket: PropTypes.object,
  messages: PropTypes.array,
};

const mapStateToProps = state => ({
  nickname: state.nickname,
  socket: state.socket,
  messages: state.messages,
});

export default connect(mapStateToProps)(Chat);
