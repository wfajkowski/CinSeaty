import React from "react";
import AppContext from "../../context";
import "../Pop-up-site/Content.css";
//import styles from "./MovieDetails.module.scss";

const MovieDetails = (props) => {
  
  console.log(props);
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
  let premiere = props.activeMovie.premiere;
  let lead = props.activeMovie.lead;
  let description = props.activeMovie.description
  return (
    <AppContext.Consumer>
      {context => (
        <div className = "background">
        <div className = "content">
            <div className = "title"><h1>{title}</h1></div>
            <div className = "close" onClick = {props.closeMovieDetails}>x</div>
            <div className = "trailer"><iframe width="90%" height="100%" src={trailer} frameBorder="0" allow="fullscreen"></iframe></div>
            <div className = "lead">{lead}</div>
            <div className = "description">{description}</div>
            <div className = "reservation">
                <div className = "hours">Godziny seansów:</div>
                <div>12:00</div>
                <div>16:00</div>
                <div>20:00</div>
            </div>
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