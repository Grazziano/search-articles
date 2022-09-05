import React from 'react';
import style from './Input.module.scss';

function Input({ type, parentCallback, placeholder }) {
  return (
    <input
      type={type}
      onChange={({ target }) => parentCallback(target.value)}
      placeholder={placeholder}
      className={style.input}
    />
  );
}

export default Input;
