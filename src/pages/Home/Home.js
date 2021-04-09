import React from "react";
import "./Home.css";
import homeImage from "../../home-image.jpg";

function Home() {
  return (
    <div className="home">
      <h1>Welcom To Application Cafe Management</h1>
      <img src={homeImage} alt="home" />
      <div className="navigate">
        <a href="/sale">SALE</a>
        <a href="/dashboard">DASHBOARD</a>
      </div>
    </div>
  );
}

export default Home;
