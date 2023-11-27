import React from 'react';
import buttonStyles from './Button.module.css';

const Button = ({ text }) => {
  return (
    <button className={buttonStyles.button}>{text}</button>
  );
};

export default Button;