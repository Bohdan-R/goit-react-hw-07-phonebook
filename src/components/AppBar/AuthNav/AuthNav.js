import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const AuthNav = () => (
  <div className="auth-nav">
    <NavLink
      to="/register"
      exact
      className="auth-nav__link"
      activeClassName="auth-nav__link--active"
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="auth-nav__link"
      activeClassName="auth-nav__link--active"
    >
      Sign in
    </NavLink>
  </div>
);

export default AuthNav;
