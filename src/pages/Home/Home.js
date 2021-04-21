import React from "react";
import "./Home.css";
import homeImage from "../../home-image.jpg";

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="home">
      <h1>Welcom To Application Cafe Management</h1>
      <img src={homeImage} alt="home" />
      <div className="navigate">
        <a href="/sale">SALE</a>
        <a href="/dashboard">DASHBOARD</a>
        <a href="/register">CREATE USER</a>
        <p onClick={logout}>SWITCH USER</p>
      </div>
    </div>
  );
}

export default Home;
