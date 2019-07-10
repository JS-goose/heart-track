import React from "react";
import styles from "./Nav.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../pages/About/About";
import logo from '../../../assets/logo/HeartTrack_Logo_Middle_White.svg';

export default function Nav() {
  return (
    <nav id={styles["nav-container"]}>
      <ul id={styles["nav-links-list"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
        <li>
          <Link to="/opensource">Open Source</Link>
        </li>
        <li>
          <Link to="/contributors">Contributors</Link>
        </li>
      </ul>

      {/* <h1>Heart<i className="fas fa-heartbeat"></i>Track</h1> */}
      <img src={logo} alt="the heart track logo" id={styles['logo']}/>

      <React.Fragment>
        <div id={styles["login-container"]}>
          <form action="">
            <label htmlFor="{styles['username-input]}" />
            <i className="fas fa-user-shield" />{" "}
            <input id={styles["username-input"]} type="text" placeholder="username" />
            <label htmlFor="{styles['password-input']}" />
            <i className="fas fa-lock" />{" "}
            <input id={styles["password-input"]} type="password" placeholder="password" />
          </form>
        </div>
      </React.Fragment>
    </nav>
  );
}
