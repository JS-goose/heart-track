import React, { Component } from "react";
import styles from "../../styles/UserInputs.module.css";
import UserInput from "./UserInput/UserInput";

const inputsOne = [
  { placeholder: "Heart Rate (BPM)", type: "number", size: "3", min: '1', max: '150' },
  { placeholder: "Systolic (top)", type: "number", size: "3", min: '1', max: '200' },
  { placeholder: "Diastolic (bottom)", type: "number", size: "3", min: '1', max: '200' },
];

const inputsTwo = [
  { placeholder: "Age", type: "number", size: "3", min: '1', max: '120' },
  { placeholder: "Height (inches)", type: "number", size: "3", min: '1', max: '96 '},
  { placeholder: "Weight (pounds)", type: "number", size: "3", min: '1', max: '800' },
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
    console.log(event.target.valueAsNumber);
    let updatedState = { ...this.state };
    updatedState = { HR: event.target.valueAsNumber };
    this.setState({ HR: updatedState["HR"] });
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
                />
              );
            })}
          </ul>
        </article>
      </form>
    );
  }
}

export default UserInputs;
