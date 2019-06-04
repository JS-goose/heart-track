import React from "react";
import styles from "./Nav.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../pages/About';

export default function Nav() {
  return (
    <nav id={styles["nav-container"]}>
      <ul id={styles["nav-links-list"]}>
      <li><Link to='/'>
          Home
        </Link></li>
        <li><Link to='/about'>
          About
        </Link></li>
        <li><Link to='/charts'>
          Charts
        </Link></li><li><Link to='/opensource'>
          Open Source
        </Link></li><li><Link to='/contributors'>
          Contributors
        </Link></li>
      </ul>

      <h1>❤HearTrack❤</h1>

      <React.Fragment>
        <div id={styles["login-container"]}>
          <form action="">
            <p>Log In</p>
            <label htmlFor="{styles['username-input]}" />
            <input id={styles["username-input"]} type="text" placeholder="username" />
            <label htmlFor="{styles['password-input']}" />
            <input id={styles["password-input"]} type="text" placeholder="password" />
          </form>
        </div>
      </React.Fragment>
    </nav>
  );
}
