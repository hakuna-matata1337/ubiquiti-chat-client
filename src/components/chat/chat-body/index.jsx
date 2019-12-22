import React from 'react';

// Children Components
import Messages from './Messages';
import Controls from './Controls';

export default () => (
  <div className='chat-body'>
    <Messages />
    <Controls />
  </div>
);
