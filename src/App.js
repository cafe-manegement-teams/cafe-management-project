import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Staff from "./components/Staff/Staff";
import Sidebar from "./components/Sidebar/Sidebar";
import Report from "./components/Report/Report";
import Goods from "./components/Goods/Goods";
import Warehouses from "./components/WareHouses/WareHouses";
import Receipt from "./components/Receipt/Receipt";
import Delivery from "./components/Delivery/Delivery";
import Supplier from "./components/Supplier/Supplier";
import CreateGoods from "./components/Goods/CreateGoods";
import EditGoods from "./components/Goods/EditGoods";
import CreateWarehouse from "./components/WareHouses/CreateWarehouse";
import EditWarehouse from "./components/WareHouses/EditWarehouse";


import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Sidebar />
          <Home />
        </div>
      </Route>
      <Route path="/staff">
        <div className="App">
          <Sidebar />
          <Staff />
        </div>
      </Route>
      // goods
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
          <EditGoods  />
        </div>
      </Route>
      // warehouse
      <Route path="/warehouses" exact>
        <div className="App">
          <Sidebar />
          <Warehouses />
        </div>
      </Route>
      <Route path="/warehouses/create" >
        <div className="App">
          <Sidebar />
          <CreateWarehouse />
        </div>
      </Route>
      <Route path="/warehouses/edit" >
        <div className="App">
          <Sidebar />
          <EditWarehouse />
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
      <Route path="/supplier">
        <div className="App">
          <Sidebar />
          <Supplier />
        </div>
      </Route>

      <Route path="/report">
        <div className="App">
          <Sidebar />
          <Report />
        </div>
      </Route> 
    </Switch>
  );
}

export default App;
