import React, { Component } from "react";
import UserInputs from "./UserInputs";
import placeholder from "../../../assets/imgs/chart-placeholder.jpg";
import styles from "./styles/Charts.module.css";

class Charts extends Component {
  render() {
    return (
      <article id={styles["chart-container"]}>
        <h1>Charts</h1>
        <p>
          Here users will eventually be able to manually input their vital statistic numbers and see
          them charted out on their chosen time scale.
        </p>
        <UserInputs />

        <figure>
          <img src={placeholder} alt="a chart graph showing red and green values" />
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@m_b_m" target="_blank" rel="noreferrer noopener">
              M. B. M.
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer noopener">
              Unsplash
            </a>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Charts;
