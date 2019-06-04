import React from 'react';
import styles from './Nav.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Nav() {
  return (
    <nav id={styles['nav-container']}>
      <ul id={styles['nav-links-list']}>
       <a href="Home.js"><li>Home</li></a>
        <a href="About.js"><li>About</li></a>
        <a href="Charts.js"><li>Charts</li></a>
		<a href="OpenSource.js"><li>Open Source</li></a>
       <a href="Contributors.js"><li>Contributors</li></a>
      </ul>
      

      <React.Fragment>
        <div id={styles['login-container']}>
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
