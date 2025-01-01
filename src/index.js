import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* Nav Bar */}
        <nav>
          <Link to="/Home">          
            <img src="/logo.png" alt="Logo" className="logo" />
          </Link>

          {/* Navigation Menu */}
          <div className="navMenu">
            <Link to="/Login">
              <button className="Login">Log in</button>
            </Link>
          </div>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="Login" element={<Login/>}/>
          <Route path='/Dashboard/:fullName' element={<Dashboard/>}/>

</Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
