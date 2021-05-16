import React from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../../redux/auth';
import './UserMenu.scss';
import { IoExitOutline } from 'react-icons/io5';

const UserMenu = ({ name, onLogout }) => (
  <div className="user">
    <p className="user__name">
      <span className="user__name-decor">Welcome,</span> {name}
    </p>
    <button className="user__btn" type="button" onClick={onLogout}>
      Logout
      <IoExitOutline className="user__btn__icon" />
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
