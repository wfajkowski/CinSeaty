import React from "react";
import "./CarouselItem.css";

class CarouselItem extends React.Component {
  handleClick(e) {
    this.props.updateFn("activeMovie", this.props);
    this.props.openDetails();
  }

  render() {
    return (
      <>
        <img
          src={this.props.photo}
          alt={"bla"}
          onClick={this.handleClick.bind(this)}
        />
      </>
    );
  }
} 

export default CarouselItem;
