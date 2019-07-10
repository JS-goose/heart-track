import React from "react";

const UserInput = (props) => (
  <li>
    <label>{props.title}</label>
    <input type="number" placeholder={props.placeholder} />
  </li>
);

export default UserInput;
