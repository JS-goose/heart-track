import React, { Component } from "react";
import styles from "../../styles/UserInputs.module.css";
import UserInput from "./UserInput/UserInput";

const inputsOne = [
  { placeholder: "Heart Rate (BPM)", type: "number", size: "3", min: "1", max: "150", id: "HR" },
  { placeholder: "Systolic (top)", type: "number", size: "3", min: "1", max: "200", id: "sys" },
  {
    placeholder: "Diastolic (bottom)",
    type: "number",
    size: "3",
    min: "1",
    max: "200",
    id: "dias",
  },
];

const inputsTwo = [
  { placeholder: "Age", type: "number", size: "3", min: "1", max: "120", id: "age" },
  { placeholder: "Height (inches)", type: "number", size: "3", min: "1", max: "96 ", id: "hgt" },
  { placeholder: "Weight (pounds)", type: "number", size: "3", min: "1", max: "800", id: "wgt" },
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
    /*//* This needs work - need to compare input.id with state and if they match update state based on input value */
    let updatedState = Object.keys({ ...this.state });
    console.log(event.target);
    console.log(updatedState);
    updatedState.map((input) => {
      return input.id === event.target.id
        ? console.table(event.target.id && input.id)
        : console.log("No match");
    });
    // this.setState(updatedState); 
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
                  id={input.id}
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
                  id={input.id}
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
