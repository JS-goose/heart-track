import React, { Component } from "react";
import styles from "../../styles/UserInputs.module.css";
import UserInput from "./UserInput/UserInput";

const inputsOne = [
  { placeholder: "Heart Rate (BPM)", type: "number", size: "3", min: "1", max: "150", id: 'hr', },
  { placeholder: "Systolic (top)", type: "number", size: "3", min: "1", max: "200", id:'sys' },
  { placeholder: "Diastolic (bottom)", type: "number", size: "3", min: "1", max: "200", id:'dias' },
];

const inputsTwo = [
  { placeholder: "Age", type: "number", size: "3", min: "1", max: "120", id:'age',},
  { placeholder: "Height (inches)", type: "number", size: "3", min: "1", max: "96 ", id:'hgt', },
  { placeholder: "Weight (pounds)", type: "number", size: "3", min: "1", max: "800", id:'wgt' },
];

class UserInputs extends Component {
  state = {
    HR: 0,
    Systolic: 0,
    Diastolic: 0,
    Age: 0,
    Height: 0,
    Weight: 0,
  };

  handleUserInput = (event) => {
    console.log(event.target);
    let updatedState = { ...this.state };
    updatedState = {
      HR: event.target.valueAsNumber,
      Systolic: event.target.valueAsNumber,
      Diastolic: event.target.valueAsNumber,
      Age: event.target.valueAsNumber,
      Height: event.target.valueAsNumber,
      Weight: event.target.valueAsNumber,
    };
    this.setState(updatedState);
  };

  render() {
    return (
      <form id={styles["user-inputs"]}>
        <article>
          <ul>
            {inputsOne.map((input) => {
              return (
                <UserInput
                  key={input.placeholder}
                  type={input.type}
                  placeholder={input.placeholder}
                  size={input.size}
                  min={input.min}
                  max={input.max}
                  handleUserInput={this.handleUserInput}
                />
              );
            })}
          </ul>
        </article>

        <article>
          <ul>
            {inputsTwo.map((input) => {
              return (
                <UserInput
                  key={input.placeholder}
                  type={input.type}
                  placeholder={input.placeholder}
                  size={input.size}
                  maxlength={input.maxlength}
                  min={input.min}
                  max={input.max}
                  handleUserInput={this.handleUserInput}
                />
              );
            })}
          </ul>
        </article>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserInputs;
