import React, { useState } from "react";
import { loginUser } from "../../JS/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import "./Signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, history));
    setEmail("");
    setPassword("");
  
  };
  return (
    <div className="login-page">
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" required
        placeholder="Email"  onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())} />

        <input type="password" name="password" required autoComplete="on"
        placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <div className="row">
            <button type="submit">Login</button>
            <Link to="/register">Register</Link>
        </div>
    </form>
</div>
  );
};

export default Signin;
