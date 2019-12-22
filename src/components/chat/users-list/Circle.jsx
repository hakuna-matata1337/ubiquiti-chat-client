import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Circle = ({ online }) => {
  return (
    <div className='circle-count'>
      <div className='counter'>{online.length}</div>
      <div className='title'>users online</div>
    </div>
  );
};

Circle.propTypes = {
  online: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  online: state.online,
});

export default connect(mapStateToProps)(Circle);
