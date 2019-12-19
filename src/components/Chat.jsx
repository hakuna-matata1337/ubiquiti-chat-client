import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { disconnect } from 'redux/actions/User';

const Chat = ({ nickname, disconnect }) => {
  const history = useHistory();

  useEffect(() => {
    if (!nickname) {
      history.push('/');
    }
  }, [nickname, history]);

  return (
    <main className='chat'>
      <div>
        chat <button onClick={() => disconnect(nickname)}>Disconnect</button>
      </div>
    </main>
  );
};

Chat.propTypes = {
  nickname: PropTypes.string.isRequired,
  disconnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nickname: state.User.nickname,
});

export default connect(mapStateToProps, { disconnect })(Chat);
