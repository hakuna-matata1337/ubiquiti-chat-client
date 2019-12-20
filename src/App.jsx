import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';

import Main from 'components/Main';

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
      <ReactNotifications />
    </Router>
  </Provider>
);

export default App;
