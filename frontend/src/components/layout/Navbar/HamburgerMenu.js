import React from 'react';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './Navbar.module.css';

// My Components
import Backdrop from '../../utils/Backdrop';
import NavigationItems from './NavigationItems';

const HamburgerMenu = (props) => {
  return (
    <>
      <div className={classes.hamburger_container} onClick={props.clicked}>
        <FontAwesomeIcon icon={faBars} size='lg' color='white' />
      </div>
      <Backdrop show={props.showBack} clicked={props.close} />

      <div
        className={
          props.showBack ? classes.sideDrawer_open : classes.sideDrawer_close
        }
      >
        <NavigationItems />
      </div>
    </>
  );
};

export default HamburgerMenu;
