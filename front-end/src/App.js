import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Login from "./components/Login";
import Listings from "./components/Listings";





class App extends Component {
  render() {
    return (
      <div className="App">

  
<div>
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Listings" component={Listings} />
      <Route path="/Info" component={Info} />
      <Route path="/login" component={Login} />
      </Switch>
</div>

      </div>
    );
  }
}

export default App;
