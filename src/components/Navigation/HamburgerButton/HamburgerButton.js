import React from 'react';
import classes from './HamburgerButton.css';

const hamburgerButton = (props) => (
  <div
    onClick={props.clicked}
    className={classes.HamburgerButton}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default hamburgerButton;