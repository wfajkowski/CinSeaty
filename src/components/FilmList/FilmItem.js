import React from 'react';
import styles from './FilmItem.module.scss';

const FilmItem = ({
  photo,
  title,
  genre,
  duration,
  description,
  adult,
  premiere,
  production,
  trailer
}) => {
  return (
    <li className={styles.filmItem}>
      <img src={photo} alt={title} />
      <h4>{title}</h4>
    </li>
  );
}

export default FilmItem;