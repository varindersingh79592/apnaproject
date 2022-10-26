import React, { useState } from "react";
import SignIn from "./SignIn.css";

function SignInPage() {
  const [userName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const userNameUpdation = (event) => {
    updateUserName(event.target.value);
  };
  const passwordUpdation = (event) => {
    updatePassword(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: "userName",
      password: "password",
    };
    updateUserName("");
    updatePassword("");
  };

  return (
    <div id="body">
      <form className="complete__form" onSubmit={formHandler}>
        <h1 className="signHeading">Sign In to avail our services</h1>
        <h3 className="signHeading1">Please Enter your Details</h3>

        <input
          type="text"
          className="input_value"
          placeholder="Please Enter your Username"
          value={userName}
          onChange={userNameUpdation}
        ></input>
        <br></br>
        <br></br>
        <input
          type="password"
          className="input_value"
          placeholder="Please Enter your password "
          value={password}
          onChange={passwordUpdation}
        ></input>
        <br></br>
        <br></br>
        <button className="submitButton" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
