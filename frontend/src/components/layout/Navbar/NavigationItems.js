import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const NavigationItems = () => {
  return (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/services'>Services</Link>
      </li>
      <li>
        <Link to='/ourwork'>Our Work</Link>
      </li>
    </>
  );
};

export default NavigationItems;
