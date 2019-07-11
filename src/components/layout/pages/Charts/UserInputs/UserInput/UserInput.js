import React from "react";

const UserInput = (props) => (
  <li>
    <label>{props.placeholder}:</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      size={props.size}
      maxLength={props.maxlength}
    />
  </li>
);

export default UserInput;
