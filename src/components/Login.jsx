import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Login = ({ socket, server, nickname }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (nickname) {
      history.push('/chat');
    }
  }, [nickname, history]);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('set nickname', name);
  };

  return (
    <main className='login'>
      <div className='container'>
        {server ? (
          <>
            <div className='title'>Choose your nickname</div>
            <form className='user-input' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='nickname'
                value={name}
                style={{ width: 200 }}
                onChange={e => setName(e.target.value)}
              />
              <button>Submit</button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div>
              <Loader type='Triangle' color='#00BFFF' height={60} width={60} />
            </div>
            <div style={{ marginTop: 10 }}>
              Server is down. Trying to reconnect...
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

Login.propTypes = {
  socket: PropTypes.object,
  server: PropTypes.bool,
  nickname: PropTypes.string,
};

const mapStateToProps = state => ({
  socket: state.socket,
  server: state.server,
  nickname: state.user.nickname,
});

export default connect(mapStateToProps)(Login);
