import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ socket, nickname }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (nickname) {
      history.push('/chat');
    }
  }, [nickname, history]);

  const setNickname = () => socket.emit('set-nickname', name);

  return (
    <main className='login'>
      <div className='title'>Choose your nickname</div>
      <div className='input'>
        <input
          type='text'
          placeholder='nickname'
          value={name}
          style={{ width: 200 }}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={setNickname}>Submit</button>
      </div>
    </main>
  );
};

Login.propTypes = {
  nickname: PropTypes.string,
  socket: PropTypes.object,
};

const mapStateToProps = state => ({
  nickname: state.nickname,
  socket: state.socket,
});

export default connect(mapStateToProps)(Login);
