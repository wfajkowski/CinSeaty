import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import axios from "axios";



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navibar = React.createRef();
    this.input = React.createRef();
    this.state = {
      filter: '',
      films: this.props.value,
    } 
  }
  setValue = event => {
    this.setState({
      filter: event.target.innerHTML
    });
  }

  changeValue = event =>{
    this.setState({
      filter: event.target.value
    })
    console.log(this.props.value)
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
  componentDidMount() {
    axios.get("http://localhost:3001/api/movies").then(res => {
      // console.log(res.data);
      this.setState({ films: res.data });
    });
  }
  render(){
    // const { searchValue, movies } = this.state;
    // const lowercasedFilter = searchValue.toLowerCase();
    // const filteredData = movies.filter(item => {
    //   return Object.keys(item).some(key => {
    //     item[key].toLowerCase().includes(lowercasedFilter)
    //   });
    // // });
    console.log(this.state);
    const filmList = this.state.films
      .filter(item => {
        return item.title.toLowerCase().indexOf(this.state.filter) >= 0
      })
      .map(item => (
        <li key={item._id} onClick={this.setValue}><p>{item.title}</p></li>))
    return (
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
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <button onClick={this.hamburger} id="hamburger" className="turnRight">
            <div></div>
          </button>
        </ul>
        <div className="searching">
          <input  ref={this.input} value={this.state.filter} onChange={this.changeValue} placeholder='Select Film'/>
          <ul>
          {filmList}
          </ul>    
          <i className="fa fa-search"></i>
          </div>
      </nav>
    );
  }
};

export default Navbar;

