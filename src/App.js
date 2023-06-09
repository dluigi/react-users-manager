import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const users = [
  { username: "Guy", age: 27 },
  { username: "Nir", age: 28 },
  { username: "Eyal", age: 26 },
];

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
