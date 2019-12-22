import React from 'react';

// Children Components
import Circle from './Circle';
import UsersList from './UsersList';

export default () => (
  <div className='users-content'>
    <Circle />
    <UsersList />
  </div>
);
