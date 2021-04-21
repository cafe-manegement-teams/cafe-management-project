import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../api/axiosClient";

function Register() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const user = {
    username,
    password,
  };
  const register = async (e) => {
    e.preventDefault();

    if (user.username === "" || user.password === "") {
      setErrors("username and password  not empty");
      return;
    }

    const resp = await axios.post("/login/add", user);

    if (resp.data) {
      setErrors(resp.data);
      history.push("/");
    }
  };

  return (
    <form className="login">
      <h3>Register</h3>
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
      {errors && <p>{errors}</p>}
      <input type="button" value="Submit" onClick={register} />
    </form>
  );
}

export default Register;
