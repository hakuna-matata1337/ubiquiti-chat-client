import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import TopBar from './chat/top-bar/';
import UsersList from './chat/users-list/';
import ChatBody from './chat/chat-body/';
import Footer from 'components/Footer';

const Chat = ({ nickname }) => {
  const history = useHistory();

  useEffect(() => {
    if (!nickname) {
      history.push('/');
    }
  }, [nickname, history]);

  return (
    <main className='chat'>
      <TopBar />
      <UsersList />
      <ChatBody />
      <Footer />
    </main>
  );
};

Chat.propTypes = {
  nickname: PropTypes.string,
};

const mapStateToProps = state => ({
  nickname: state.user.nickname,
});

export default connect(mapStateToProps)(Chat);
