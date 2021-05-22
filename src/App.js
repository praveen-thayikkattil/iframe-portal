import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import Toolbar from './components/Toolbar';
import Login from './components/Login';
import useToken from './components/useToken';

import './App.scss';

function App() {
  const [mainNavOpen, updateNavState] = useState(false);
  const { token, setToken, unsetToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <div className="page-wrap">
        <Toolbar />

        <button className="nav-open" onClick={() => updateNavState(true)}>MENU</button>

        <Link
          className="app-logo" 
          onClick={() => updateNavState(false)} 
          to='/'
        >
          Iframe Portal
        </Link>

        <nav id="main-nav" className={`${mainNavOpen ? 'sidebar-active' : ''}`}>
          <button className="nav-close" onClick={() => updateNavState(false)}>+</button>

          <h6 className="logo-text">Iframe Portal</h6>

          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/' onClick={unsetToken}>Sign In</a></li>
            {/* <li><a href='/sign-up'>Sign Up</a></li> */}
            <li><a href='/' onClick={unsetToken}>Logout</a></li>
          </ul>
        </nav>

        <Main mainNavOpen={mainNavOpen} />
      </div>
    </div>
  );
};

export default App;
