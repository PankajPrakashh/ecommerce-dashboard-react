import React from 'react';

import buttonClasses from '../Button.module.scss';
import classes from './RaisedButton.module.scss';

export default (props) => {

  const buttonColorNames = {
    'primary': classes.Primary,
    'accent' : classes.Accent,
    'warn'   : classes.Warn,
  };

  const colorName  = props.color ? buttonColorNames[props.color.toLowerCase()] : buttonColorNames.primary;
  const classNames = [buttonClasses.Button, classes.RaisedButton, colorName];

  console.log(classNames);

  return (
    <button
      className={classNames.join(' ')}
      type={props.type}
      onClick={props.clicked}
      title={props.title}>
      {props.children}
    </button>
  );
};
