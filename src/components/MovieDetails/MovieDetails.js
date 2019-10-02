import React from "react";
import AppContext from "../../context";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className={styles.movieDetailsBackground}>
          <p>film</p>
          <span
            className={styles.closeModal}
            onClick={context.closeDetails}
          >
            X
          </span>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default MovieDetails;