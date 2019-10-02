import React from 'react';
import FilmList from '../../components/FilmList/FilmList';

const Home = function (props) {
  return (
    <FilmList openMovieDetails = {props.openMovieDetails} closeMovieDetails = {props.closeMovieDetails} activeMovie = {props.activeMovie} />
  )
};

export default Home;