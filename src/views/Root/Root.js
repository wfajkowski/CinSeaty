import React from "react";
import axios from "axios";
import "./index.css";
import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Navbar from "../../components/Navbar/Navbar";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import PopUp from "../../components/Pop-up-site/Content";


class Root extends React.Component {
  state = {
    movies: [],
    activeMovie: null,
    isMovieDetailsOpen: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/movies").then(res => {
      console.log(res.data);
      this.setState({ movies: res.data });
    });
  }

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
    const contextElements = {...this.state};
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          {isMovieDetailsOpen && <MovieDetails activeMovie={this.state.activeMovie}/>}
          <PopUp />
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;