import React, { Component } from "react";
import styles from "../../styles/UserInputs.module.css";
import UserInput from "./UserInput/UserInput";

const inputsOne = [
  { placeholder: "Heart Rate", type: "number" },
  { placeholder: "Systolic", type: "number" },
  { placeholder: "Diastolic", type: "number" },
];

const inputsTwo = [
  { placeholder: "Age", type: "number" },
  { placeholder: "Height", type: "number" },
  { placeholder: "Weight", type: "number" },
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
