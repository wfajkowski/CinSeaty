import React from "react";
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import AppContext from '../../context';
import Theather from '../../components/Theater/Theater';


const Reservation = (props) => {
  console.log(window.location.href);
  return (
    <>
    <Theather />
    <AppContext.Consumer>
      {context => (<h1><ReservationForm reservation={{ ...context }} /></h1>)}
    </AppContext.Consumer>
    </>
  );
};

export default Reservation;
