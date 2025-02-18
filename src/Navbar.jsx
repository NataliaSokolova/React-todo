// import React from 'react'
// import {NavLink} from 'react-router-dom'

// export const Navbar = () => (
//   <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
//     <div className="navbar-brand">
//       Note App
//     </div>

//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <NavLink
//           className="nav-link"
//           to="/"
//           exact
//         >
//           Главная
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink
//           className="nav-link"
//           to="/about"
//         >
//           Информация
//         </NavLink>
//       </li>
//     </ul>
//   </nav>
// )

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
