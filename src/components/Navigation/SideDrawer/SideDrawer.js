import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return(
    <Aux>
      <Backdrop
        show={props.open}
        clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <HamburgerButton clicked={props.closed} />
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;