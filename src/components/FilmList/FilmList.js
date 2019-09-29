import React from "react";
import FilmItem from './FilmItem';
import AppContext from "../../context";
import styles from './FilmList.module.scss'

class FilmList extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (<ul className={styles.filmListWrapper}>
          {context.movies.map(item => (
            <FilmItem key={item._id} {...item} />
          ))}
        </ul>)}
      </AppContext.Consumer>
    );
  }
};

export default FilmList;
