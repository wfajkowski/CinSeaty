import React from "react";
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import AppContext from '../../context';

const Reservation = () => {
  return (
    <AppContext.Consumer>
      {context => (<h1><ReservationForm reservation={{ ...context }} /></h1>)}
    </AppContext.Consumer>
  );
};

export default Reservation;
