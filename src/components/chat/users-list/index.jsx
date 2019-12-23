import React from 'react';

// Children Components
import Total from './Total';
import UsersList from './UsersList';

export default () => (
  <div className='users-content'>
    <Total />
    <UsersList />
  </div>
);
