import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../JS/actions/user";
import { useHistory, Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleClick = () => {
    dispatch(registerUser({ name, email, password }, history));
    setName("");
    setEmail("");
    setPassword("");
    history.push("/login")
  };

  return (
    <div className="login-page">
    <form onSubmit={handleClick}>
        <h2>Register</h2>
        <input type="text" name="name" required
        placeholder="Name"  onChange={(e)=>{setName(e.target.value)}} />

        <input type="email" name="email" required
        placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />

        <input type="password" name="password" required autoComplete="on"
        placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />

        <div className="row">
            <button type="submit">Register</button>
            <Link to="/login">Login</Link>
        </div>
    </form>
</div>
  );
};

export default Signup;
