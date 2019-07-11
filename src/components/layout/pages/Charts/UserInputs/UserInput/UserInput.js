import React from "react";

const UserInput = (props) => (
  <li>
    <label>{props.placeholder}:</label>
    <input type="number" placeholder={props.placeholder} />
  </li>
);

export default UserInput;
