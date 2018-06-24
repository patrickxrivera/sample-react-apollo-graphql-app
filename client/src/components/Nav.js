import React from 'react';

import { NavLink } from 'react-router-dom';

const style = {
  wrapper: {
    display: 'flex'
  },
  home: {
    marginRight: '1rem'
  },
  homeActiveStyle: {
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
};

const Nav = () => (
  <div style={style.wrapper}>
    <NavLink exact to="/" style={style.link} activeStyle={style.homeActiveStyle}>
      <span style={style.home}>Home</span>
    </NavLink>

    <span>Sign Up</span>
  </div>
);

export default Nav;
