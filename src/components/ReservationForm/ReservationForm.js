import React from "react";
import axios from "axios";
import moment from "moment";
import styles from "./ReservationForm.module.scss";
import ReservationConfirmation from '../ReservationConfirmation/ReservationConfirmation'

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null,
      datetime: null,
      hall: null,
      title: null,
      seats: [],
      name: null,
      surname: null,
      email: null,
      telephone: null,
      programme_id: null,
      reservation: null,
      active: false,
      total: null
    };
  }

  async componentDidMount() {
    const programmeId = this.props.context.reservation.reservation.programme_id;
    let movieId;
    const reservation = Math.random().toString(36).substr(2, 10).toUpperCase();
    this.setState({ reservation });

    await axios
      .get("http://localhost:3001/api/programmes/")
      .then(res => {
        const programme = (res.data).filter(el => {
          return el._id === programmeId;
        })
        movieId = programme[0].movie_id;
        const dateValue = programme[0].time;
        const date = moment(dateValue).format("DD-MM-YYYY")
        const time = moment(dateValue).format("HH:mm")

        this.setState({
          date: date,
          time: time,
          programme_id: programmeId,
          datetime: dateValue
        });
        return res.data
      })

    await axios
      .get(`http://localhost:3001/api/movies/${movieId}`)
      .then(res => {
        this.setState({ title: res.data.title });
      })

    const getSeats = () => {
      const seats = this.props.tickets.fullTickets;
      let total = 0;
      seats.forEach(seat => {
        const seatId = seat.place_id;

        axios
          .get("http://localhost:3001/api/halls/")
          .then(res => {
            const seat = (res.data).filter(el => {
              return el._id === seatId;
            })
            const fullSeat = `${seat[0].seat_row}${seat[0].seat}`
            this.setState({ hall: seat[0].hall_id });
            return fullSeat;
          })
          .then((fullSeat) => {
            axios
              .get(`http://localhost:3001/api/tickets/${seat.ticket_id}`)
              .then(res => {
                const ticket = (res.data[0]);
                total += ticket.price;

                this.setState({
                  seats: [...this.state.seats, {
                    seat_id: seatId,
                    ticket_id: ticket._id,
                    seat: fullSeat,
                    type: ticket.type,
                    price: `${(ticket.price).toFixed(2).replace('.', ',')} PLN`,
                    status: "taken"
                  }]
                });
                this.setState({ total });
              })
          })
      })
    };
    getSeats();
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  sendFeedback (templateId, variables) {
    if(this.state.telephone&&this.state.name&&this.state.email){
  window.emailjs.send('gmail', templateId, variables)
    .then(res =>{ alert('Email successfully sent!')})
    .catch(err =>  alert(`Unfortunately there was a problem with sending an email probably thats the problem: ${err.text}`))
  } else {
      setTimeout(function(){
        alert('Please fill all the fields')
      }, 1000);
  }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const templateId = 'send_ticket';
    this.sendFeedback(templateId, {
      message_html: this.state.feedback, 
      from_name: this.state.name, 
      reply_to: this.state.email,
      from_surname: this.state.surname,
      title: this.state.title,
      reservation: this.state.reservation,
      hall_id: this.state.hall,
      date: this.state.date,
      time: this.state.time,
      price: this.state.total
    })
    axios
      .post("http://localhost:3001/api/reservations", {
        programme_id: this.state.programme_id,
        hall_id: this.state.hall,
        seats: this.state.seats,
        reservation_nr: this.state.reservation,
        title: this.state.title,
        date: this.state.date,
        time: this.state.time,
        datetime: this.state.datetime,
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        telephone: this.state.telephone,
        active: true
      })
      .then(response => {
        this.setState({ active: true });
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    if (!this.state.active) {
      return (
        <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className={styles.formContainer}>
          <div className={styles.reservationInfoDiv}>
            <h3 className={styles.formHeader}>Reservation summary</h3>
            <p>Title: {this.state.title}</p>
            <p>Screening date: {this.state.date}</p>
            <p>Screening time: {this.state.time}</p>
            <p>Cinema hall: {this.state.hall}</p>
            <p>Tickets: {(this.state.seats).map(function (d, idx) {
              return (<li key={idx} className={styles.seatElement}>Place: {d.seat}, {d.type}, {d.price}</li>)
            })}</p>
          </div>
          <div className={styles.reservationFormDiv}>
            <h3 className={styles.formHeader}>Please fill you data</h3>
            <form id="user-info" className={styles.reservationForm} onSubmit={this.onSubmit.bind(this)}>
              <input
                type="text"
                className={styles.formItem}
                id="item"
                placeholder="Name"
                name="name"
                required
                onChange={this.onChange.bind(this)}
              />
              <input
                type="text"
                className={styles.formItem}
                id="item"
                placeholder="Surname"
                name="surname"
                required
                onChange={this.onChange.bind(this)}
              />
              <input
                type="text"
                className={styles.formItem}
                id="item"
                placeholder="Email"
                name="email"
                required
                onChange={this.onChange.bind(this)}
              />
              <input
                type="text"
                className={styles.formItem}
                id="item"
                placeholder="Telephone"
                name="telephone"
                required
                onChange={this.onChange.bind(this)}
              />
              <button type="submit" className={styles.btnsubmitt} value="confirm" id="confirm-button">
                <i className="">Confirm</i>
              </button>
            </form>
          </div>
        </div >
        </div>
      )
    };

    return (
      <ReservationConfirmation state={this.state} />
    );
  }
}

export default ReservationForm;
