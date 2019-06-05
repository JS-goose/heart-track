import React from "react";

const About = () => {
  return (
    <div>
      <h1>About HearTrack</h1>
      <p>
        This is an open source project created to help you track and share important vital
        information, such as blood pressure, heart rate, weight, height, age.
      </p>
      <p>
        With HearTrack you'll be able to manually enter your vital statistics and then produce a
        chart displaying the changes over a period of time of your choosing (hour, day, week, month,
        etc.)
      </p>
      <p>
        Once you have your numbers plotted out, you'll be able to e-mail them to yourself or your
        doctor as well as have them automatically transferred to an spreadsheet format if you
        choose. Currently the project is still in the alpha phase but if you wish to contribute we
        welcome any and all help. Check out the issues section under the{" "}
        <a href="https://github.com/JS-goose/heart-track" target="blank">
          repo
        </a>
        for specific ways to contribute.
      </p>
    </div>
  );
};

export default About;
