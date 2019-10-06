import React from "react";
import ReservationTickets from '../../components/ReservationTickets/ReservationTickets';
import AppContext from '../../context';
import Theather from '../../components/Theater/Theater';


class Reservation extends React.Component {
  render() {
    console.log(this.props, "no panie");
    return (
      <>
        <AppContext.Consumer>
          {context => <Theather programme_id={context.programme_id} />}
        </AppContext.Consumer>
      </>
    );
  }
};

export default Reservation;
