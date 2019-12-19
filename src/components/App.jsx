import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import io from 'socket.io-client';

import Notice from 'components/reusables/Notice';

import Login from 'components/Login';
import Chat from 'components/Chat';
import Footer from 'components/Footer';

const socket = io(require('config.json').server);

socket.on('chat-message', message => console.log(message));

socket.on('notification', obj => Notice(obj));

const App = () => {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <input
            type='text'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={() => socket.emit('chat-message', message)}>
            send message
          </button>

          <input
            type='text'
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
          <button onClick={() => socket.emit('setNickname', nickname)}>
            change nick
          </button>
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
};

export default App;
