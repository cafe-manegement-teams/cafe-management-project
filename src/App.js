import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Staff from "./pages/Staff/Staff";
import Sidebar from "./components/Sidebar/Sidebar";
import Goods from "./pages/Goods/Goods";

import CreateGoods from "./pages/Goods/CreateGoods";
import EditGoods from "./pages/Goods/EditGoods";

import "./App.css";
import Sale from "./pages/Sale/Sale";
import StaffCreate from "./pages/Staff/StaffCreate";
import Login from "./pages/Login/Login";
import imageDashboard from "./image-staff.jpg";

function App() {
  return (
    <Switch>
      {/* Login */}
      <Route path="/login" component={Login} />

      {/* Home page */}
      <Route path="/" exact>
        <div className="App">
          <Home />
        </div>
      </Route>

      {/* Dashboard */}
      <Route path="/dashboard" exact>
        <div className="App">
          <Sidebar />
          <img src={imageDashboard} alt="" className="imageDashboard" />
        </div>
      </Route>

      {/* sale */}
      <Route path="/sale" exact>
        <Sale />
      </Route>

      {/* staff */}
      <Route path="/staff" exact>
        <div className="App">
          <Sidebar />
          <Staff />
        </div>
      </Route>
      <Route path="/staff/create">
        <div className="App">
          <Sidebar />
          <StaffCreate />
        </div>
      </Route>

      {/* Goods */}
      <Route path="/goods" exact>
        <div className="App">
          <Sidebar />
          <Goods />
        </div>
      </Route>
      <Route path="/goods/create">
        <div className="App">
          <Sidebar />
          <CreateGoods />
        </div>
      </Route>
      <Route path="/goods/edit">
        <div className="App">
          <Sidebar />
          <EditGoods />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
