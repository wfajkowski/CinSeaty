import React from "react";
import axios from "axios";
import styles from "./ReservationTickets.module.scss";
import ReservationForm from '../ReservationForm/ReservationForm'

class ReservationTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenPlaces: [],
            ticketListFull: [],
            fullTickets: [],
            next: false,
            states: []
        }
    }

    async componentDidMount() {
        const chosenSeats = this.props.seats;

        chosenSeats.forEach(seat => {
            const seatId = seat.seat_id;
            axios
                .get("http://localhost:3001/api/halls/")
                .then(res => {
                    const seat = (res.data).filter(el => {
                        return el._id === seatId;
                    })
                    this.setState({
                        chosenPlaces: [...this.state.chosenPlaces, seat[0]]
                    });
                })
        })

        axios
            .get(`http://localhost:3001/api/tickets/`)
            .then(res => {
                const tickets = res.data;
                this.setState({ ticketListFull: [{ value: '', type: '(Select ticket)' }].concat(tickets) });
                return tickets;
            })
    };

    onChange(e) {
        const tickets = this.state.ticketListFull;
        const arr = (e.target.value).split(" ");
        const place_id = arr[0];
        const ticket_id = arr[1];
        this.setState({
            fullTickets: [...this.state.fullTickets, {
                place_id,
                ticket_id
            }],
            states: [...this.state.states, place_id]
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.fullTickets || !this.state.fullTickets.length) {
            alert("Please choose tickets type")
        } else { this.setState({ next: true }); }
    }

    render() {
        if (!this.state.next) {
            const isSet = (id) => {
                return this.state.states.includes(id);
            };
            return (
                <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
                <div className={styles.formContainer} >
                    <div className={styles.reservationFormDiv}>
                        <h3 className={styles.formHeader}>Please choose your tickets</h3>
                        <form id="tickets-info" className={styles.reservationForm} onSubmit={this.onSubmit.bind(this)}>
                            {(this.state.chosenPlaces).map((d, idx) => {
                                return (<li key={idx} className={styles.seatElement}>{`Place: ${d.seat_row}${d.seat}`}
                                    {<select className={styles.list} onChange={this.onChange.bind(this)} disabled={isSet(d._id)} >
                                        {(this.state.ticketListFull).map(
                                            (e, idx) => {
                                                return (<option name={e.type} key={idx} value={`${d._id} ${e._id}`}>{e.type}</option>)
                                            })}
                                    </select>}
                                </li>)
                            })}
                            <button type="submit" className={styles.formItem} value="confirm">
                                <i className="">Next</i>
                            </button>
                        </form>
                    </div>
                    </div>
                </div >
            )
        }
        return (
            <ReservationForm tickets={this.state} context={this.props} />
        );
    }
}

export default ReservationTickets;
