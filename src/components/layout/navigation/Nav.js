import React from 'react';
import styles from './Nav.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Nav() {
  return (
    <nav id={styles['nav-container']}>
      <ul id={styles['nav-links-list']}>
        <li>Home <i class="fa fa-home" aria-hidden="true"></i> </li>
        <li>About</li>
        <li>Charts</li>
        <li>Open Source</li>
        <li>Contributors</li>
      </ul>
      

      <React.Fragment>
        <div id={styles['login-container']} className="font-effect-brick-sign">
          <form action="">
              <p>Log In</p>
            <label htmlFor="{styles['username-input]}"></label>
            <input id={styles['username-input']} type="text" placeholder="username" />
            <label htmlFor="{styles['password-input']}"></label>
            <input id={styles['password-input']} type="text" placeholder="password" />
          </form>
        </div>
      </React.Fragment>
    </nav>
  );
}
