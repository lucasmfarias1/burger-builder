import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <HamburgerButton
      clicked={props.opened} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;