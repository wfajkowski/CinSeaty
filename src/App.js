import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dajmaxa from './components/Dajmaxa';

class App extends Component {
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
    render() {
      return (
      <Router>
          <div>
            <nav className="navbar">
            <ul className="navbar-nav mr-auto" id="navigation" ref={this.navibar}>
            <div className="nav-flex"><p>CinSeaty</p>
            <i className="fa fa-video-camera"></i>
            </div>
              <li><Link to={'/home'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/dajmaxa'} className="nav-link">Mateusz daj 100%</Link></li>
              <button onClick={this.hamburger} id="hamburger" className="turnRight">
              <div></div>
              </button>
            </ul>
            </nav>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/dajmaxa' component={Dajmaxa} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default App;