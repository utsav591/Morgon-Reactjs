import React from 'react';

import logo from '../../Assets/logo.png';
import { NavLink } from 'react-bootstrap';


function Footer(){
return(
<section className="container text-dark p-5 footer-brand bg-light" >
<div className="row">
  <div className="col-lg-4 pb-3">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt='logo'></img></NavLink>
    <p>Morgan was born in London. He was commonly known as Fred Morgan and was the son of John Morgan, a successful genre artist sometimes known as 'Jury Morgan' (after one of his paintings The Gentlemen of the Jury)."</p>
  </div>
  <div className="col-lg-2">
    <h4 className="fw-bold">CATEGORIES</h4>
    <ul className="footer-ul">
      <li className="pb-2">Sea Painting</li>
      <li className="pb-2">Love Painting</li>
      <li className="pb-2">Nature</li>
      
    </ul>
  </div>
  <div className="col-lg-2">
    <h4 className="fw-bold">SUPPORT</h4>
    <ul className="footer-ul">
      <li className="pb-2">Help & Support</li>
      <li className="pb-2">Terms & Condition</li>
      <li className="pb-2">Privacy policy</li>
      <li className="pb-2">Help</li>
      <li className="pb-2">Contact</li>
    </ul>
  </div>
  <div className="col-lg-4">
    <h4 className="fw-bold pb-2">NEWS LETTER</h4>
    <div className="d-flex">
      <input type="email" className="form-control my-3" id="exampleFormControlInput1" placeholder="YOUR EMAIL"/>
      <div className="my-3 ms-2">
        <button type="button" className="btn btn-primary">Subscribe</button>
      </div>
    </div>
    <div>
      <p>To Be One Of The Most Trusted Globally Reputed Financial Distribution Companies</p>
    </div>
  </div>
</div>
</section>
)
    
}

export default Footer;