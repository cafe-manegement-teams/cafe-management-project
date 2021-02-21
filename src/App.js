import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Staff from "./components/Staff/Staff";
import Sidebar from "./components/Sidebar/Sidebar";
import Goods from "./components/Goods/Goods";
import Receipt from "./components/Receipt/Receipt";
import Delivery from "./components/Delivery/Delivery";
import Supplier from "./components/Supplier/Supplier";
import CreateGoods from "./components/Goods/CreateGoods";
import EditGoods from "./components/Goods/EditGoods";
import CreateSupplier from "./components/Supplier/CreateSupplier";
import EditSupplier from "./components/Supplier/EditSupplier";
import Login from "./components/Login/Login";

import "./App.css";
import StaffCreate from "./components/Staff/StaffCreate";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Sidebar />
          <Home />
        </div>
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

      <Route path="/receiptbill">
        <div className="App">
          <Sidebar />
          <Receipt />
        </div>
      </Route>
      <Route path="/deliverybill">
        <div className="App">
          <Sidebar />
          <Delivery />
        </div>
      </Route>
      <Route path="/supplier" exact>
        <div className="App">
          <Sidebar />
          <Supplier />
        </div>
      </Route>
      <Route path="/supplier/create">
        <div className="App">
          <Sidebar />
          <CreateSupplier />
        </div>
      </Route>
      <Route path="/supplier/edit">
        <div className="App">
          <Sidebar />
          <EditSupplier />
        </div>
      </Route>
      <Route path="/">
        <div className="App">{/* <Login /> */}</div>
      </Route>
    </Switch>
  );
}

export default App;
