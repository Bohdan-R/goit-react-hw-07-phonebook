import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation/';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../../redux/auth';
import './AppBar.scss';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <div className="nav-container">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
