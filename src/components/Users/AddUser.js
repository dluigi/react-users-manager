import React, { useState, userState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername,enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input} z>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} 
        onChange={usernameChangedHandler}></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
