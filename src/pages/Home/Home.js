import React from "react";
import "./Home.css";
import homeImage from "../../asset/home-image.jpg";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="home">
      <h1>Welcom To Application Cafe Management</h1>
      <img src={homeImage} alt="home" />
      <div className="navigate">
        <button onClick={() => history.push("/sale")}>SALE</button>
        <button onClick={() => history.push("/dashboard")}>DASHBOARD</button>
        <button onClick={() => history.push("/register")}>CREATE USER</button>
        <button onClick={logout}>SWITCH USER</button>
      </div>
    </div>
  );
}

export default Home;
