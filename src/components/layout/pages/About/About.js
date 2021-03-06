import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <article className={styles["about-container"]}>
      <h1>About Heart Track</h1>
      <p>
        This is an open source project created to help you track and share important vital
        information, such as blood pressure, heart rate, weight, height, and age.
      </p>
      <p>
        With Heart Track you'll be able to manually enter your vital statistics and then produce a
        chart displaying the changes over a period of time of your choosing (hourly, daily, weekly,
        monthly, etc.)
      </p>
      <p>
        Once you have your numbers plotted out, you'll be able to e-mail them to yourself or your
        doctor as well as have the power to transfer them to a spreadsheet format if you choose.
        Currently the project is still in the alpha phase but if you wish to contribute we welcome
        any and all help. Check out the issues section under the{" "}
        <a href="https://github.com/JS-goose/heart-track" target="_blank" rel="noopener noreferrer">
          repo
        </a>
        {" "}for specific ways to contribute.
      </p>
    </article>
  );
};

export default About;
