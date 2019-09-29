import React from "react";
import {movies} from '../../data/sampleData';
import FilmItem from './FilmItem';
import styles from './FilmList.module.scss'

const FilmList = () => {
  return (
    <ul className={styles.filmListWrapper}>
      {movies.map(item => (
        <FilmItem key={item._id} {...item} />
      ))}
    </ul>
  );
};

export default FilmList;
