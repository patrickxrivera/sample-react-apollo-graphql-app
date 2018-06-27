import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { AUTH_TOKEN } from 'helpers/constants';

const style = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25px'
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginRight: '10px',
    marginBottom: 'inherit'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  signup: {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'inherit'
  }
};

const Nav = ({ history }) => {
  const isAuthenticated = localStorage.getItem(AUTH_TOKEN);

  return (
    <div style={style.wrapper}>
      <NavLink exact to="/" style={style.link}>
        <h5 style={style.title}>Career Karma</h5>
      </NavLink>
      {isAuthenticated ? renderLogout(history) : renderLogin()}
    </div>
  );
};

const renderLogout = (history) => (
  <NavLink onClick={handleLogout(history)} exact to="/" style={style.link}>
    <span>Logout</span>{' '}
  </NavLink>
);

const handleLogout = (history) => () => {
  localStorage.removeItem(AUTH_TOKEN);
};

const renderLogin = () => (
  <div>
    <NavLink
      to={{
        pathname: '/start/1',
        state: {
          isLogin: false
        }
      }}
      style={style.signup}>
      <span>Sign Up</span>
    </NavLink>
    <NavLink
      to={{
        pathname: '/login',
        state: {
          isLogin: true
        }
      }}
      style={style.link}>
      <span>Log In</span>
    </NavLink>
  </div>
);

export default withRouter(Nav);
