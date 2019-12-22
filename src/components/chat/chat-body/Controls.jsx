import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Controls = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('');

    if (message.length > 0) {
      socket.emit('global message', message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='controls'>
      <input
        className='message'
        type='text'
        placeholder='message'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button className='send'>SEND</button>
    </form>
  );
};

Controls.propTypes = {
  socket: PropTypes.object,
};

const mapStateToProps = state => ({
  socket: state.socket,
});

export default connect(mapStateToProps)(Controls);
