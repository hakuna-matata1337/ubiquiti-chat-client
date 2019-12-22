import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Greeting = ({ user: { nickname, connected } }) => {
  return (
    <div className='greeting'>
      <div className='title'>Hey {nickname}!</div>
      <div className='online-time'>
        You have been online for{' '}
        <span className='time'>
          <Moment fromNow ago>
            {new Date(connected)}
          </Moment>
        </span>
      </div>
    </div>
  );
};

Greeting.propTypes = {
  user: PropTypes.object,
  nickname: PropTypes.string,
  connected: PropTypes.number,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Greeting);
