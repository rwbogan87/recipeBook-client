import React from 'react';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DisplayAll from "./Components/Display";
import Create from "./Components/Create";
import Auth from "./Components/User/Auth";

function App() {
  const routes = ['home', 'display', 'create', 'account'];
  const [sessionToken, setSessionToken] = useState('');

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

  const clearToken = () => {
      localStorage.clear();
      sessionStorage.clear();
      setSessionToken('');
      console.log('succesfully logged out')
  }

  return (
    <div className="App">
      <Navbar routes={routes} />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/display">
        <DisplayAll token={sessionToken}/>
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/account">
        <Auth updateToken={updateToken} clearToken={clearToken}/>
      </Route>
    </div>
  );
}

export default App;
