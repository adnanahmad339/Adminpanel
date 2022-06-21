import React, { useState } from 'react';
import { login } from '../../Redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
const Login = () => {


  const admin = useSelector((state) => state.user.currentUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }

  return (
    <form action="" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>

      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text" placeholder='username'
        onChange={(e) => setUsername(e.target.value)} />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password" placeholder='password'
        onChange={(e) => setPassword(e.target.value)} />



      <button type="button" onClick={handleClick}>
        Login
      </button>

    </form>


  );
}

export default Login;