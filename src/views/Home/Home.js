import React from 'react';
import FilmCarousel from '../../components/FilmCarousel/FilmCarousel';
import FilmList from '../../components/FilmList/FilmList';
import './home.css'

const Home = (props) => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    <div className="ui container">
      <FilmCarousel />
      <FilmList openMovieDetails = {props.openMovieDetails} closeMovieDetails = {props.closeMovieDetails} activeMovie = {props.activeMovie} activeDate={props.activeDate}/>
    </div>
    </div>
  );
}

export default Home;