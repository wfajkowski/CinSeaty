import React from "react";
import AppContext from "../../context";
import styles from "./ReservationForm.module.scss";

class ReservationForm extends React.Component {
  reservationGenerator = ()=> Math.random().toString(36).substr(2, 10).toUpperCase();

  render() {
    console.log(this.props);
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.formContainer}>
            <div className={styles.reservationInfoDiv}>
              <h3 className={styles.formHeader}>Reservation summary</h3>
              <p>Movie Id: {context.reservation.movie_id}</p>
              <p>Place 1 Id: {context.reservation.place[0].seat_id}</p>
              <p>Ticket 1 Id: {context.reservation.place[0].ticket_id}</p>
              <p>Place 2 Id: {context.reservation.place[1].seat_id}</p>
              <p>Ticket 2 Id: {context.reservation.place[1].ticket_id}</p>
              <p>Reservation No: {this.reservationGenerator()}</p>
            </div>
            <div className={styles.reservationFormDiv}>
              <h3 className={styles.formHeader}>Please fill you data</h3>
              <form id="user-info" className={styles.reservationForm}>
                <input
                  type="text"
                  className={styles.formItem}
                  id="item"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  className={styles.formItem}
                  id="item"
                  placeholder="Surname"
                  required
                />
                <input
                  type="text"
                  className={styles.formItem}
                  id="item"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  className={styles.formItem}
                  id="item"
                  placeholder="Telephone"
                  required
                />
                <button
                  type="submit"
                  className={styles.formItem}
                  value="confirm"
                  id="confirm-button"
                >
                  <i className="">Confirm</i>
                </button>
              </form>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ReservationForm;
