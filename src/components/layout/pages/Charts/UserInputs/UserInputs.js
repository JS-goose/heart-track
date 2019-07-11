import React, { Component } from "react";
import styles from "../../styles/UserInputs.module.css";
import UserInput from "./UserInput/UserInput";

const inputsOne = [
  { placeholder: "Heart Rate", type: "number", size: '3', maxlength: 3 },
  { placeholder: "Systolic", type: "number", size: '3', maxlength: 3 },
  { placeholder: "Diastolic", type: "number", size: '3', maxlength: 3 },
];

const inputsTwo = [
  { placeholder: "Age", type: "number", size: '3', maxlength: 3 },
  { placeholder: "Height", type: "number", size: '3', maxlength: 3 },
  { placeholder: "Weight", type: "number", size: '3', maxlength: 3 },
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
                  maxlength={input.maxlength}
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
