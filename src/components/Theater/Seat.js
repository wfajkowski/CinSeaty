import React from "react";

class Seat extends React.Component {
  state = { taken: false, picked: false, class: "seat" };

  onSeatClick = async event => {
    /* let letter;
    let element = event.target;
    if (event.target.innerText < 15 && event.target.innerText > 0) {
      if (event.target.innerText < 8) {
        for (let i = 0; i < event.target.innerText; i++) {
          element = element.previousSibling;
          letter = element.innerText;
        }
      } else {
        for (let i = 0; i <= event.target.innerText; i++) {
          element = element.previousSibling;
          letter = element.innerText;
        }
      }
      console.log(letter + event.target.innerText);
      console.log(this.props.coords)
    } */
    // console.log(this.state);
    // console.log(this.props);
    if (this.props.className === "taken") {
      this.setState({ taken: true });
    } else {
      if (event.target.innerText < 15 && event.target.innerText > 0) {
        if (!this.state.taken) {
          if (!this.state.picked) {
            this.setState({ class: "seat reserved", picked: true });
          } else {
            this.setState({ class: "seat", picked: false });
          }
        }
      }
    }
  };

  componentDidMount() {
    this.setState({ coords: this.props.coords });

    // if (this.props.reservedSeats.length > 0) {
    //   if (this.props.reservedSeats.includes(this.state.coords)) {
    //     this.setState({ class: "seat taken" });
    //   }
    // }
  }

  render() {
    return (
      <div
        className={`${this.state.class} ${this.props.className}`}
        onClick={this.onSeatClick}
        key={this.props.coords}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Seat;
