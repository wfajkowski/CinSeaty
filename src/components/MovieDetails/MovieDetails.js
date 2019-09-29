import React from "react";
import AppContext from "../../context";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className={styles.movieDetailsBackground}>
          <p>film</p>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default MovieDetails;