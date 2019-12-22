import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ReactNotifications from 'react-notifications-component';
import Login from 'components/Login';
import Chat from 'components/Chat';

// Actions
import { connection } from 'redux/actions/socket';

const App = ({ socket, connection }) => {
  useEffect(() => {
    if (!socket) {
      connection();
    }
  }, [socket, connection]);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/chat' component={Chat} />
        </Switch>
      </div>
      <ReactNotifications />
    </Router>
  );
};

App.propTypes = {
  socket: PropTypes.object,
  connection: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  socket: state.socket,
});

export default connect(mapStateToProps, {
  connection,
})(App);
