import React from "react";
import Moment from "moment";
import styles from "./AvailableDates.module.scss";

class AvailableDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'Dzisiaj'
    };
  }

  handleClick = e => {
    const val =
      e.target.innerHTML !== "Dzisiaj"
        ? e.target.innerHTML
        : Moment().format("D.M");
    this.setState({
      activeButton:
        e.target.innerHTML !== "Dzisiaj"
          ? e.target.innerHTML
          : Moment().format("D.M")
    });
    this.props.updateValue("activeDate", val);
  };

  render() {
    console.log(Moment().format("D.M"));
    console.log(
      Moment()
        .add(1, "days")
        .format("D.M")
    );
    console.log('activeButton', this.state.activeButton);
    return (
      <div className={styles.wrapper}>
        {this.props.dates.map(item => (
          <button
            onClick={this.handleClick}
            className="ui inverted button"
            key={item}
          >
            {item === Moment().format("D.M") ? "Dzisiaj" : item}
          </button>
        ))}
      </div>
    );
  }
}

export default AvailableDates;
