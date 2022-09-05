import React from 'react';
import style from './Button.module.scss';

function Button({ type = 'button', children }) {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
