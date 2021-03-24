import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from "./Components/Navbar";
import Splash from "./Components/Splash"
// import Home from "./Components/Home";
import DisplayAll from "./Components/Display";
import FindOther from "./Components/API/Online";
import Create from "./Components/Create";
import Auth from "./Components/User/Auth";


function App() {
  const routes = ['Display', 'Create', 'Account', 'FindOther'];
  const [sessionToken, setSessionToken] = useState('');
  const localToken = localStorage.getItem('token');

  // stuff for student example
  // const [students, setStudents] = useState([{
  //   name: "Andy",
  //   grade: 11
  // },{
  //   name: "Amy",
  //   grade: 12
  // }])

  const updateToken = (data) => {
    localStorage.setItem('token', data);
    // this not working to pass as props, use localstorage
    setSessionToken(data);
  }
  
  useEffect(() => {
    // console.log(`sessionToken: ${sessionToken}`)
    if (localToken) {
      setSessionToken(localToken)
    }
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
        <div className="authWindow">
          <p>{localStorage.getItem('activeUser')}</p>
          <button onClick={clearToken}>Logout</button>
        </div>
      )
    } else {
      return null;
    }
  }

  

  return (
    <div className="App">
      <Navbar routes={routes} tokenCheck={tokenCheck()}/>
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
      <Route exact path="/">
        <Auth updateToken={updateToken} clearToken={clearToken} />
      </Route>
    </div>
  );
}

export default App;
