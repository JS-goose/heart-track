import React from "react";
import placeholder from "../../../assets/imgs/chart-placeholder.jpg";
import styles from "./styles/Charts.module.css";

const Charts = () => {
  return (
    <div>
      <h1>Charts</h1>
      <p>
        Here users will eventually be able to manually input their vital statistic numbers and see
        them charted out on their chosen time scale.
      </p>

      <form id={styles["user-inputs"]}>
        <label htmlFor={styles["heartRate-input"]} />
        <input type="number" placeholder="heart rate" />

        <label htmlFor={styles["bp-systolic-input"]} />
        <input type="number" placeholder="i.e. 120" />

        <label htmlFor={styles["bp-diastolic-input"]} />
        <input type="number" placeholder="i.e. 80" />

        <label htmlFor={styles["weight-input"]} />
        <input type="number" placeholder="weight" />

        <label htmlFor={styles["height-input"]} />
        <input type="number" placeholder="height" />

        <label htmlFor={styles["age-input"]} />
        <input type="number" placeholder="age" />
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
    </div>
  );
};

export default Charts;
