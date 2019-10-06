import React from "react";


let allSelected= []

class Seat extends React.Component {
  state = { 
      taken: false, 
      picked: false, 
      class: "seat",
      _id: ""
    };

  
  onSeatClick = event => {
    if (this.props.className === "taken") {
      this.setState({ taken: true });
    } else {
      if (event.target.innerText < 15 && event.target.innerText > 0) {
        if (!this.state.taken) {
          if (!this.state.picked) {
            this.setState({ class: "seat reserved", picked: true });
            allSelected = [...allSelected, this.props.id]
          } else {
            this.setState({ class: "seat", picked: false });
            let index = allSelected.indexOf(this.props.id)
            allSelected.splice(index, 1)
          }
          this.props.idsGetter(allSelected)
        }
      }
    }
  };

  componentDidMount() {
    allSelected = []
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
