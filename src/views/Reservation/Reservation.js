import React from "react";
import ReservationTickets from '../../components/ReservationTickets/ReservationTickets';
import AppContext from '../../context';
import Theather from '../../components/Theater/Theater';


const Reservation = () => {
  return (
    <>
    <AppContext.Consumer>
      {context => (
        <Theather programme_id={context.reservation.programme_id}/>
      )
      }

    </AppContext.Consumer>
    </>
  );
};

export default Reservation;
