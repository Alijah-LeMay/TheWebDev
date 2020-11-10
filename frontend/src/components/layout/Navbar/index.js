import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import classes from './Navbar.module.css';

// My Components
import HamburgerMenu from './HamburgerMenu';
import NavigationItems from './NavigationItems';
import CenterContainer from '../../utils/CenterContainer';
import OutlinedNavBtn from './OutlinedNavBtn';
import Logo from '../../Logo';

const Navbar = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const drawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  const drawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <CenterContainer>
      <nav className={classes.nav}>
        <div className={classes.headerLogo}>
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        <ul className={classes.desktop_container}>
          <NavigationItems />
          <OutlinedNavBtn to='/quote' content='Hire Us' />
        </ul>
        <HamburgerMenu
          showBack={showSideDrawer}
          clicked={drawerToggleHandler}
          close={drawerCloseHandler}
        />
      </nav>
    </CenterContainer>
  );
};

export default Navbar;
