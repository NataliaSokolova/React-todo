
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => (
  <nav>
    <NavLink to="/" className={styles.navbarBrand}>
      Note App
    </NavLink>

    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          className={styles.navLink}
          to="/"
          exact
        >
          Главная
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          className={styles.navLink}
          to="/about"
        >
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
);
