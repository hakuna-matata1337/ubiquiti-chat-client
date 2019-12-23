import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AccountCircle } from '@material-ui/icons';

const MessageCard = ({ message, nickname }) => {
  return (
    <div className='message'>
      <div className={message.nickname !== nickname ? 'left' : 'right'}>
        {message.nickname !== nickname ? (
          <>
            <AccountCircle />
            <div className='user'>
              <div className='name'>{message.nickname}</div>
              <div className='time'>
                <Moment fromNow>{new Date(message.time)}</Moment>
              </div>
            </div>
            <div className='text'>{message.text}</div>
            <div className='spacer'></div>
          </>
        ) : (
          <div className='text'>{message.text}</div>
        )}
      </div>
    </div>
  );
};

MessageCard.propTypes = {
  nickname: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nickname: state.user.nickname,
});

export default connect(mapStateToProps)(MessageCard);
