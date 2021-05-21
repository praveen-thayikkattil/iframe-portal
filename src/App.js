import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';

import './App.scss';

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainNavOpen: false
    }
  }

  onClickOut = (e) => {
    if (hasClass(e.target, 'nav-open')) {
      return;
    } else {
      this.setState({ 
        mainNavOpen: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="page-wrap">
          <button className="nav-open" onClick={() => this.setState({ mainNavOpen: true })}>MENU</button>

          <Link
            className="app-logo" 
            onClick={() => this.setState({ mainNavOpen: false })} 
            to='/'
          >
            Iframe Portal
          </Link>

          <nav id="main-nav" className={`${this.state.mainNavOpen ? 'sidebar-active' : ''}`}>
            <button className="nav-close" onClick={() => this.setState({ mainNavOpen: false })}>+</button>

            <h6 className="logo-text">Iframe Portal</h6>

            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/sign-in'>Sign In</a></li>
              <li><a href='/sign-up'>Sign Up</a></li>
            </ul>
          </nav>
          <Main mainNavOpen={this.state.mainNavOpen} />
        </div>
      </div>
    );
  }
}

export default App;
