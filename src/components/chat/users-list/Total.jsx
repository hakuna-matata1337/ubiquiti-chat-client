import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Total = ({ online }) => {
  const total = online.length;
  return (
    <div className='total-count'>
      <div className='counter'>{total}</div>
      <div className='title'>{total > 1 ? 'users' : 'user'} online</div>
    </div>
  );
};

Total.propTypes = {
  online: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  online: state.online,
});

export default connect(mapStateToProps)(Total);
