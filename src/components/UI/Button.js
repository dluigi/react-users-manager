import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    // IF prop.button is undefined THEN the button type will be 'button'
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
