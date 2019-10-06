import React from "react";
import AppContext from "../../context";
import "./MovieDetails.css";
//import styles from "./MovieDetails.module.scss";

const MovieDetails = (props) => {
  //console.log(props);
  let title = props.activeMovie.title;
  let trailer = props.activeMovie.trailer;
  let duration = props.activeMovie.duration;
  let genre = props.activeMovie.genre;
  let adult = function () {
    if (props.activeMovie.adult == true) {
      return 'Tak';
    } else {
      return 'Nie';
    };
  };
  let production = props.activeMovie.production;
  let premiere = props.activeMovie.premiere.slice(0,10);
  let lead = props.activeMovie.lead;
  let description = props.activeMovie.description;
  return (
    <AppContext.Consumer>
      {context => (
        <div className = "background">
        <div className = "content">
            <div className = "title"><h1>{title}</h1></div>
            <div className = "close" onClick = {props.closeMovieDetails} cursor="pointer"><i class="fa fa-times-circle"></i></div>
            <div className = "trailer"><iframe width="95%" height="90%" src={trailer} frameBorder="0" allow="fullscreen"></iframe></div>
            <div className = "description">{lead}<br /><br />{description}</div>
            <div className = "metadata">
                Czas trwania: {duration} minut<br />
                Gatunek: {genre}<br />
                Film wyłącznie dla dorosłych: {adult()}<br />
                Data premiery: {premiere}<br />
                Produkcja: {production}
            </div>
        </div>
    </div>
    )}
    </AppContext.Consumer>
  );
};

export default MovieDetails;