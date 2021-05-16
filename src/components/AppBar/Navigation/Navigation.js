import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import './Navigation.scss';

const Navigation = ({ isAuthenticated }) => (
  <nav className="nav">
    <NavLink
      to="/"
      exact
      className="nav__link"
      activeClassName="nav__link--active"
    >
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="nav__link"
        activeClassName="nav__link--active"
      >
        PHONEBOOK
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
