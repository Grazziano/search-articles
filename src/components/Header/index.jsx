import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <h1>Search Articles</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
