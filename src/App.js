import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from "./Components/Navbar";
import Splash from "./Components/Splash"
import Home from "./Components/Home";
import DisplayAll from "./Components/Display";
import FindOther from "./Components/API/Online";
import Create from "./Components/Create";
import Auth from "./Components/User/Auth";


function App() {
  const routes = ['Home', 'Display', 'Create', 'Account', 'FindOther'];
  const [sessionToken, setSessionToken] = useState('');
  const localToken = localStorage.getItem('token');

  const updateToken = (data) => {
    localStorage.setItem('token', data);
    // this not working to pass as props, use localstorage
    setSessionToken(data);
  }
  
  useEffect(() => {
    console.log(`sessionToken: ${sessionToken}`)
  }, [sessionToken])

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    window.location.reload(false);
    console.log('Succesfully logged out')
  }


  const tokenCheck = () => {
    if (localToken) {
      return (
        <div>
          <p>Welcome, {localStorage.getItem('activeUser')}</p>
          <button onClick={clearToken}>Logout</button>
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Navbar routes={routes} />
      {tokenCheck()}
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/findOther">
        <FindOther />
      </Route>
      <Route path="/display">
        <DisplayAll token={sessionToken} />
      </Route>
      <Route path="/create">
        <Create token={sessionToken} />
      </Route>
      <Route path="/account">
        <Auth updateToken={updateToken} clearToken={clearToken} />
      </Route>
    </div>
  );
}

export default App;
