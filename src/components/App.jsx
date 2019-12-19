import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import axios from 'axios';
import config from 'config.json';

import Login from 'components/Login';
import Chat from 'components/Chat';
import Footer from 'components/Footer';

axios.defaults.baseURL = config.proxy;

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/chat' component={Chat} />
        </Switch>
        <Footer />
        <ReactNotifications />
      </div>
    </Router>
  </Provider>
);

export default App;
