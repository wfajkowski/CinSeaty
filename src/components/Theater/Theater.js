import React from "react";
import AppContext from "../../context";
import axios from "axios";
import Seat from "./Seat";
import "./Theater.css";

class Theather extends React.Component {
  state = { reservedSeats: [] }

  printRows = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "I", "J"];
    return rows.map(value => {
      const row = [];
      row[0] = <Seat number={value} className="letter" />;
      for (let i = 1; i < 16; i++) {
        let number = i < 8 ? i : i - 1;
        row[i] = <Seat number={number} coords={value + number} />;
        if (this.state.reservedSeats.includes(value+number)) row[i] = <Seat number={number} coords={value + number} className="taken" />;
        if (i == 8) {
          row[i] = <br />;
        }
      }
      return row;
    });
  }

  componentDidMount() {
    let reservations;
    axios.get("http://localhost:3001/api/reservations").then(res => {
      reservations = [...res.data];
      reservations.forEach(item => {
        item.seats.forEach(item => {
          this.setState({ reservedSeats: [...this.state.reservedSeats, item.seat] });
        });
      });
    //   console.log(this.state.reservedSeats)

    });
  }

  render() {
    return <div className="seats-container">{this.printRows()}</div>;
  }
}

export default Theather;
