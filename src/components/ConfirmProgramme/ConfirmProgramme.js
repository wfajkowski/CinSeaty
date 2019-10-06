import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
import AppContext from "../../context";
import styles from "./ConfirmProgramme.module.scss";

class ConfirmProgramme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.activeMovie,
      hour: null,
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/reservation",
            state: { ...this.props }
          }}
        />
      );
    }
  };

  handleClick = () => {
    // this.props.closeConfirm();
    this.setRedirect();
  };

  componentDidMount() {
    console.log(this.state.hour);
    axios
      .get("http://localhost:3001/api/programmes/" + this.props.activeMovie._id)
      .then(res => {
        this.setState({ hour: res.data.find(findProgramme).time });
      });

    const findProgramme = element => {
      if (this.props.programme_id === element._id) {
        console.log(element);
        return element;
      }
    };
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      console.log('poszedł update', this.props);
      // this.props.closeConfirm();
    }
  }
 
  render() {
    console.log(this);
    console.log(this.props);
    console.log(this.state);
    console.log(this.state.hour);
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <div className={styles.confirmBackground}>
              <div className={styles.confirmWrapper}>
                <div onClick={context.closeConfirm} className={styles.closeBtn}>
                <i class="fa fa-times-circle"></i>
                </div>
                <p className={styles.p}>{this.state.movie.title}</p>
                <p className={styles.p}>{`Date: ${Moment(
                  this.state.hour
                ).format("D.M")}`}</p>
                <p className={styles.p}>{`Hour: ${Moment(
                  this.state.hour
                ).format("HH:mm")}`}</p>
                {this.renderRedirect()}
                <button
                  onClick={this.handleClick}
                  className={styles.confirmButton}
                >
                  Book now
                </button>
              </div>
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ConfirmProgramme;
