import React, { useState } from "react";
import {Link} from "react-router-dom";
import { axiosWithAuth } from "../api/axiosAuth";

const Login = () => {

  const [credentials, setCredentials] = useState({});
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then ( res => {
        localStorage.setItem('token', res.data.payload)
      })
  }

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit = {login} >
        <input 
          onChange= {handleChanges}
          type="text"
          placeholder = "username"
          name = "username"
          value = {credentials.username}/>
        <input 
          onChange = {handleChanges}
          type="password"
          name = "password"
          value = {credentials.password}/>
        <button><Link to="/bubbles">Login</Link></button>
      </form>
    </>
  );
};

export default Login;
