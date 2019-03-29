import React from 'react';
import classes from './HamburgerButton.css';

const hamburgerButton = (props) => (
  <div
    onClick={props.clicked}
    className={classes.HamburgerButton}>
    |||
  </div>
);

export default hamburgerButton;