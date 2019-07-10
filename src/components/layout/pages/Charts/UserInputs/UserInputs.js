import React, { Component } from "react";
import styles from "../../styles/UserInputs.module.css";
import UserInput from "./UserInput/UserInput";

const inputs = [
  {placeholder: 'Heart Rate', type: 'number'},
  {placeholder: 'Systolic', type: 'number'},
  {placeholder: 'Diastolic', type: 'number'},
  {placeholder: 'Age', type: 'number'},
  {placeholder: 'Height', type: 'number'},
  {placeholder: 'Weight', type: 'number'},
]

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
    this.setState({ HR: updatedState['HR'] });
  };

  render() {
    return (
      <form id={styles["user-inputs"]}>
        <article>
          <ul>
            {inputs.map((input) => {
              return <UserInput key={input.placeholder} type={input.type} />
            })}
            {/* <li>
              <label htmlFor={styles["heartRate-input"]}>Heart Rate: </label>
              <input type="number" placeholder="heart rate" onInput={this.handleUserInput} />
            </li>
            <li>
              <label htmlFor={styles["bp-systolic-input"]}>BP - Systolic: </label>
              <input type="number" placeholder="i.e. 120" />
            </li>
            <li>
              <label htmlFor={styles["bp-diastolic-input"]}>BP - Diastolic: </label>
              <input type="number" placeholder="i.e. 80" />
            </li> */}
          </ul>
        </article>

        <article>
          <ul>
            {/* <li>
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
            </li> */}
          </ul>
        </article>
      </form>
    );
  }
}

export default UserInputs;
