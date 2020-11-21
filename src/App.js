import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Staff from "./components/Staff/Staff";
import Sidebar from "./components/Sidebar/Sidebar";
import CostReport from "./components/CostReport/CostReport";
import SaleReport from "./components/SaleReport/SaleReport";
import RevenueReport from "./components/RevenueReport/RevenueReport";
import Goods from "./components/Goods/Goods";
import Warehouses from "./components/WareHouses/WareHouses";
import Receipt from "./components/Receipt/Receipt";
import Delivery from "./components/Delivery/Delivery";
import Supplier from "./components/Supplier/Supplier";
import CreateGoods from "./components/Goods/CreateGoods";

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
      <Route path="/warehouses">
        <div className="App">
          <Sidebar />
          <Warehouses />
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
      <Route path="/report/CostReport">
        <div className="App">
          <Sidebar />
          <CostReport />
        </div>
      </Route>
      <Route path="/report/RevenueReport">
        <div className="App">
          <Sidebar />
          <RevenueReport />
        </div>
      </Route>
      <Route path="/report/SaleReport">
        <div className="App">
          <Sidebar />
          <SaleReport />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
