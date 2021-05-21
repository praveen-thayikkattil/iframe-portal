import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="page-wrap">
        <button className="nav-open">MENU</button>

        <a className="app-logo" href='/'>Iframe Portal</a>

        <nav id="main-nav" className='sidebar-active'>
              <button className="nav-close">+</button>

              <h6 className="logo-text">Iframe Portal</h6>

              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/sign-in'>Sign In</a></li>
                <li><a href='/sign-up'>Sign Up</a></li>
              </ul>
            </nav>
      </div>
    </div>
  );
}

export default App;
