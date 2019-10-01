import React from 'react';
import styles from './FilmProgramme.module.scss';
import Moment from 'moment';

const FilmProgramme = ({ programme }) => {
  return (
    <div className={styles.filmProgramme}>
      <div className={styles.hours}>
        <p>Seanse:</p>
        <ul className={styles.ul}>
          {programme.map(item => (
            <li key={item._id}>
              <p>{Moment(item.time).format("D.M")}</p>
              <p>{Moment(item.time).format("HH:mm")}</p>
            </li>
            // <li>{item.time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmProgramme;