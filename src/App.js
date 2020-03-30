import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BoardComponent from "./board/boardcompoents/BoardComponent";
import CardComponent from "./CardComponent/CardComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/board" exact>
            <BoardComponent />
          </Route>
          <Route path="/board/:name">
            <CardComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
