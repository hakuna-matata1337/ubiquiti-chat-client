import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Components
import Login from 'components/Login';
import Chat from 'components/Chat';
import Footer from 'components/Footer';

// const socket = io(require('config.json').server);
// socket.on('chat-message', message => console.log(message));

// socket.on('notification', obj => Notice(obj));

import { createUserSocket } from 'redux/actions/User';

const Main = ({ socket, createUserSocket }) => {
  useEffect(() => {
    if (!socket) {
      createUserSocket();
    }
  }, [socket, createUserSocket]);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  socket: PropTypes.object,
  createUserSocket: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  socket: state.socket,
});

export default connect(mapStateToProps, { createUserSocket })(Main);
