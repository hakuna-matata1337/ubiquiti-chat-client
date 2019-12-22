import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { AccountBox } from '@material-ui/icons';

const UsersList = ({ user: { nickname, time }, index }) => {
  return (
    <div className='user'>
      <div className='id'>{index + 1}</div>
      <div className='name'>{nickname}</div>
      <div className='time'>
        <span>joined </span>
        <span className='ago'>
          <Moment fromNow>{new Date(time)}</Moment>
        </span>
      </div>
      <div className='icon'>
        <AccountBox />
      </div>
    </div>
  );
};

UsersList.propTypes = {
  user: PropTypes.object,
  nickname: PropTypes.string,
  time: PropTypes.number,
  index: PropTypes.number,
};

export default UsersList;
