import React from 'react';
import AppContext from "../../context";
import styles from './FilmItem.module.scss';
import PopUp from '../Pop-up-site/Content';
import { tsPropertySignature } from '@babel/types';

const FilmItem = function ({
  photo,
  title,
  genre,
  duration,
  description,
  adult,
  premiere,
  production,
  trailer
}) {
  return (
    <AppContext.Consumer>
      {(context) => (
        <li className={styles.filmItem} onClick = {context.openDetails} >
          <div className={styles.filmCover} >
            <img src={photo} alt={title} />
          </div>
          <h4>{title}</h4>
        </li>
      )}
    </AppContext.Consumer>
  );
}

export default FilmItem;