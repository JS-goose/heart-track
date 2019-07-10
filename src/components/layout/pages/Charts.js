import React, { Component } from "react";
import placeholder from "../../../assets/imgs/chart-placeholder.jpg";
import styles from "./styles/Charts.module.css";

class Charts extends Component {
  state = {
    HR: 0,
    BP: 0,
    age: 0,
    height: 0,
    weight: 0,
  };

  handleUserInput = (event) => {
    console.log(event.target.valueAsNumber)
    let updatedState = {...this.state};
    updatedState = {HR: event.target.valueAsNumber};
    this.setState({updatedState});
  }

  render() {
    return (
      <article id={styles["chart-container"]}>
        <h1>Charts</h1>
        <p>
          Here users will eventually be able to manually input their vital statistic numbers and see
          them charted out on their chosen time scale.
        </p>

        <form id={styles["user-inputs"]}>
          <article>
            <ul>
              <li>
                <label htmlFor={styles["heartRate-input"]}>Heart Rate: </label>
                <input type="number" placeholder="heart rate" onInput={this.handleUserInput}/>
              </li>
              <li>
                <label htmlFor={styles["bp-systolic-input"]}>BP - Systolic: </label>
                <input type="number" placeholder="i.e. 120" />
              </li>
              <li>
                <label htmlFor={styles["bp-diastolic-input"]}>BP - Diastolic: </label>
                <input type="number" placeholder="i.e. 80" />
              </li>
            </ul>
          </article>

          <article>
            <ul>
              <li>
                <label htmlFor={styles["weight-input"]}>Weight: </label>
                <input type="number" placeholder="weight" />
              </li>
              <li>
                <label htmlFor={styles["height-input"]}>Height: </label>
                <input type="number" placeholder="height" />
              </li>
              <li>
                <label htmlFor={styles["age-input"]}>Age: </label>
                <input type="number" placeholder="age" />
              </li>
            </ul>
          </article>
        </form>

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
