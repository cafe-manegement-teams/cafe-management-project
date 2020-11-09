import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Staff from "./components/Staff/Staff";
import Sidebar from "./components/Sidebar/Sidebar";

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
    </Switch>
  );
}

export default App;
