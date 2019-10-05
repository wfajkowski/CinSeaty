import React from "react";
import ReservationTickets from '../../components/ReservationTickets/ReservationTickets';
import AppContext from '../../context';

const Reservation = () => {
  return (
    <AppContext.Consumer>
      {context => (<div><ReservationTickets reservation={{ ...context }} /></div>)}
    </AppContext.Consumer>
  );
};

export default Reservation;
