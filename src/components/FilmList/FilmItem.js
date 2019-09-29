import React from 'react';
import AppContext from "../../context";
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
    <AppContext.Consumer>
      {context => (
        <li className={styles.filmItem}>
          <div className={styles.filmCover}>
            <img src={photo} alt={title} />
          </div>
          <h4>{title}</h4>
        </li>
      )}
    </AppContext.Consumer>
  );
}

export default FilmItem;