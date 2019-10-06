import React from "react";
import QRCode from 'qrcode.react';
import styles from "./ReservationConfirmation.module.scss";

class ReservationConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.formContainer}>
                <p>Thank You for the reservation.</p>
                <p>Title: {this.props.state.title}</p>
                <p>Screening date: {this.props.state.date}</p>
                <p>Screening time: {this.props.state.time}</p>
                <p>Cinema hall: {this.props.state.hall}</p>
                <p>Tickets: {(this.props.state.seats).map(function (d, idx) {
                    return (<li key={idx} className={styles.seatElement}>Place: {d.seat}, {d.type}, {d.price}</li>)
                })}</p>
                <p>Total price: {`${(this.props.state.total).toFixed(2).replace('.', ',')} PLN`}</p>
                <p>Your Reservation Number is:  {this.props.state.reservation}</p>
                <p>Please show it before the Movie in the ticket office.</p>
                <div>
                    <QRCode
                        value={String(this.props.state.reservation)}
                        size={128}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"L"}
                        includeMargin={false}
                        renderAs={"svg"}
                    />
                </div>
            </div>
        );
    }
}

export default ReservationConfirmation;
