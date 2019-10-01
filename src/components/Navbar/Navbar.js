import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navibar = React.createRef();
  }
  hamburger = event => {
    event.preventDefault();
    let hamburger = this.navibar.current;  
    if(hamburger.classList.contains('turnOn')) {
      hamburger.classList.remove('turnOn');   
      hamburger.className = 'navbar-nav mr-auto'; 
    } else {
      hamburger.className = 'navbar-nav mr-auto turnOn'; 
    }
  };
  render(){
    return (
      // <nav className="navbar">
      // <ul className="navbar-nav mr-auto" id="navigation" ref={this.navibar}>
      // <div className="nav-flex"><p>CinSeaty</p>
      // <i className="fa fa-video-camera"></i>
      // </div>
      //   <li><Link to={'/home'} className="nav-link"> Home </Link></li>
      //   <li><Link to={'/about'} className="nav-link">About</Link></li>
      //   <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
      //   <li><Link to={'/dajmaxa'} className="nav-link">Mateusz daj 100%</Link></li>
      //   <button onClick={this.hamburger} id="hamburger" className="turnRight">
      //   <div></div>
      //   </button>
      // </ul>
      // </nav>
      <nav className="navbar">
        <ul className="navbar-nav mr-auto" id="navigation" ref={this.navibar}>
          <div className="nav-flex">
            <p>CinSeaty</p>
            <i className="fa fa-video-camera"></i>
          </div>
          <li>
            <NavLink activeClassName="active-nav-link" className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-nav-link" className="nav-link" exact to="/reservation">
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <button onClick={this.hamburger} id="hamburger" className="turnRight">
            <div></div>
          </button>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
