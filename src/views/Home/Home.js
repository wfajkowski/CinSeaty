import React from 'react';
import FilmCarousel from '../../components/FilmCarousel/FilmCarousel';
import FilmList from '../../components/FilmList/FilmList';

const Home = (props) => {
  return (
    <div className="ui container">
      <FilmCarousel />
      <FilmList openMovieDetails = {props.openMovieDetails} closeMovieDetails = {props.closeMovieDetails} activeMovie = {props.activeMovie}/>
    </div>
  );
}

export default Home;