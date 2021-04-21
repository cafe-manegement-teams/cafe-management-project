import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../api/axiosClient";
import "./Login.css";

function Login() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username,
    password,
  };

  const login = async (e) => {
    e.preventDefault();
    const resp = await axios.post("/login", user);
    console.log(resp.data);
    if (resp.data === true) {
      localStorage.setItem("isLogged", "true");

      history.push("/");
      window.location.reload();
    }
  };

  return (
    <form className="login">
      <h3>Login</h3>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" value="Submit" onClick={login} />
    </form>
  );
}

export default Login;
