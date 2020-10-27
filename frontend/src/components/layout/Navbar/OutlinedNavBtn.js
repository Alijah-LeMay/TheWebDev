import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import classes from './Navbar.module.css';

// Assets

const OutlinedNavBtn = ({ to, content, children }) => {
  let rStyle = {
    activeButton: {
      color: '#4bb781',
    },
  };
  return (
    <li className={classes.outlined_nav_li}>
      <NavLink to={to} activeStyle={rStyle.activeButton}>
        {content ? content : children}
      </NavLink>
    </li>
  );
};

export default Radium(OutlinedNavBtn);
