import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setNickname } from 'redux/actions/User';

const Login = ({ nickname, setNickname }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (nickname) {
      history.push('/chat');
    }
  }, [nickname, history]);

  const handleSubmit = () => {
    setNickname(name);
  };

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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
};

Login.propTypes = {
  nickname: PropTypes.string,
  setNickname: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nickname: state.User.nickname,
});

export default connect(mapStateToProps, { setNickname })(Login);
