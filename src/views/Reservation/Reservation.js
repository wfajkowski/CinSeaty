import React from "react";
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import AppContext from "../../context";


const Reservation = () => {
  return(
  <AppContext.Consumer>
        {context => (
          <h1><ReservationForm film_id={{...context}}/></h1>
        )}
  </AppContext.Consumer>)
};

export default Reservation;
