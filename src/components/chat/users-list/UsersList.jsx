import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Children Components
import UserCard from './UserCard';

const UsersList = ({ online }) => {
  return (
    <div className='users-list'>
      {online.length > 0 ? (
        online.map((user, key) => (
          <UserCard key={key} index={key} user={user} />
        ))
      ) : (
        <div>No users</div>
      )}
    </div>
  );
};

UsersList.propTypes = {
  online: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  online: state.online,
});

export default connect(mapStateToProps)(UsersList);
