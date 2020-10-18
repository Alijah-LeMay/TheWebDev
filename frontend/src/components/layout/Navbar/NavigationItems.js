import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const NavigationItems = () => {
  return (
    <>
      <li className={classes.li}>
        <Link to='/'>Home</Link>
      </li>
      <li className={classes.li}>
        <Link to='/services'>Services</Link>
      </li>
      <li className={classes.li}>
        <Link to='/ourwork'>Our Work</Link>
      </li>

      <li className={classes.liQuote}>
        <Link to='/quote'>Quote</Link>
      </li>
    </>
  );
};

export default NavigationItems;
