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
  return (
    <form className="complete__form">
      <div id="heading">
        <h1>Sign In to avail our services</h1>
        <h3>Please Enter your Details</h3>
        <label>Username</label>
        <input
          type="text"
          className="input_value"
          placeholder="Please Enter your Username"
          value={userName}
          onChange={userNameUpdation}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <label>Password </label>
        <input
          type="password"
          className="input_value"
          placeholder="Please Enter your password please enter "
          value={password}
          onChange={passwordUpdation}
        ></input>
      </div>
      <br></br>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInPage;
