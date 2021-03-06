import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Children Components
import MessageCard from './MessageCard';

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className='content'>
      {messages.length > 0 ? (
        messages.map((message, key) => (
          <MessageCard key={key} message={message} />
        ))
      ) : (
        <div className='no-messages'>No messages</div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

MessageCard.propTypes = {
  messages: PropTypes.array,
};

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(Messages);
