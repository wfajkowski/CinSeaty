import React from "react";
import ReservationTickets from '../../components/ReservationTickets/ReservationTickets';
import AppContext from '../../context';
import Theather from '../../components/Theater/Theater';


const Reservation = () => {
  return (
    <>
    <Theather />
    <AppContext.Consumer>
      {context => (<div><ReservationTickets reservation={{ ...context }} /></div>)}
    </AppContext.Consumer>
    </>
  );
};

export default Reservation;
