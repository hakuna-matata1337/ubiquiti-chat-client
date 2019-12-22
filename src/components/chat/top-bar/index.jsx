import React from 'react';

// Children Components
import Greeting from './Greeting';
import Disconnect from './Disconnect';

export default () => (
  <div className='top-bar'>
    <Greeting />
    <Disconnect />
  </div>
);
