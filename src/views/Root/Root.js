import React from "react";
import axios from "axios";
import "./index.css";
import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Reservation from "../Reservation/Reservation";
import Navbar from "../../components/Navbar/Navbar";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
//import PopUp from "../../components/Pop-up-site/Content";

class Root extends React.Component {
  state = {
    movies: [],
    activeMovie: null,
    isMovieDetailsOpen: false,
    reservation: {
      movie_id: "5d8f5faf4ccc7f31a0536c6d",
      place: [{
        seat_id: "5d90948a038095353c62bd72",
        ticket_id: "5d93b090c32d0709bc2c091a"
      }, {
        seat_id: "5d90948a038095353c62bd73",
        ticket_id: "5d93b09fc32d0709bc2c091b"
      }],
      reservation_nr: null,
      name: null,
      surname: null,
      email: null,
      telephone: null,
      active: false
    }
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/movies").then(res => {
      console.log(res.data);
      this.setState({ movies: res.data });
    });
  };
  
  activeMovie = (e) => {
    function check(element) {
      if (element.title == e.target.textContent || element.title == e.target.alt) {
        return element;
      }
    };
    let x = this.state.movies.find(check);
    this.setState({
      activeMovie: x
    });
  };

  openMovieDetails = () => {
    this.setState({
      isMovieDetailsOpen: true
    });
  };

  closeMovieDetails = () => {
    this.setState({
      isMovieDetailsOpen: false
    });
  };

  render() {
    const { isMovieDetailsOpen } = this.state;
    const contextElements = {
      ...this.state,
    openDetails: this.openMovieDetails,
    closeDetails: this.closeMovieDetails,
    activeMovie: this.activeMovie
    };
    console.log(contextElements);
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home openMovieDetails={this.openMovieDetails} closeMovieDetails={this.closeMovieDetails} activeMovie={this.state.activeMovie}/>} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/reservation" component={Reservation} />
          </Switch>
          {isMovieDetailsOpen && <MovieDetails openMovieDetails={this.openMovieDetails} closeMovieDetails={this.closeMovieDetails} activeMovie={this.state.activeMovie}/>}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
