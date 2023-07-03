import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';


function Header(){
    return(
          <>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link className="navbar-brand" to="/"><img src={logo} alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
            <li className="nav-item">
              <Link className="nav-link p-4" activeClassName="selected" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-4" to="/About">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-4" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-4" to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
      </>
    
    )
}

export default Header;