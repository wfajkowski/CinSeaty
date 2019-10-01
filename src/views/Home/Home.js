import React from 'react';
import FilmCarousel from '../../components/FilmCarousel/FilmCarousel';
import FilmList from '../../components/FilmList/FilmList';

const Home = () => {
  return (
    <div className="ui container">
      <FilmCarousel />
      <FilmList />
    </div>
  );
}

export default Home;