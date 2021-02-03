import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DisplayAll from "./Components/Display";
import Create from "./Components/Create";
import Auth from "./Components/User/Auth";

function App() {
  const routes = ['home', 'display', 'create', 'auth']

  return (
    <div className="App">
      <Navbar routes={routes}/>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/display">
        <DisplayAll />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
    </div>
  );
}

export default App;
