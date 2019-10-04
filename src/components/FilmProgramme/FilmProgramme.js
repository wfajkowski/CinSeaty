import React from "react";
import Moment from "moment";
import AppContext from "../../context";
import styles from "./FilmProgramme.module.scss";

const FilmProgramme = ({ programme }) => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className={styles.filmProgramme}>
          <div className={styles.hours}>
            <p>Seanse:</p>
            <ul className={styles.ul}>
              {programme.map(
                item =>
                  Moment(item.time) > Moment() &&
                  context.activeDate === Moment(item.time).format("D.M") && (
                    <li key={item._id}>
                      <p>{Moment(item.time).format("D.M")}</p>
                      <p>{Moment(item.time).format("HH:mm")}</p>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default FilmProgramme;
