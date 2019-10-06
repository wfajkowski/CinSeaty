import React from "react";
import axios from "axios";
import Moment from "moment";
import AppContext from "../../context";
import styles from "./FilmItem.module.scss";
import FilmProgramme from "../FilmProgramme/FilmProgramme";

class FilmItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programme: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/programmes/" + this.props._id)
      .then(res => {
        this.setState({ programme: res.data });
      });
  }

  render() {
    let shown = null;
    for (let i = 0; i < this.state.programme.length; i++) {
      // console.log(Moment(this.state.programme[i].time).format("D.M"));
      if (
        Moment(this.state.programme[i].time).format("X") < Moment().format("X")
      ) {
        shown = false;
      } else if (
        Moment(this.state.programme[i].time).format("D.M") === this.props.date
      ) {
        shown = true;
      }
    }
    return (
      <>
        <AppContext.Consumer>
          {context =>
            shown ? (
              <li className={styles.filmItem}>
                <div className={styles.filmCover} onClick={context.activeMovie}>
                  <img
                    src={this.props.photo}
                    alt={this.props.title}
                    onClick={context.openDetails}
                  />
                </div>
                <div className={styles.filmDetails}>
                  <h4>{this.props.title}</h4>
                  <FilmProgramme
                    programme={this.state.programme}
                    movie={this.props}
                    updateFn={context.updateValue}
                    openConfirm={context.openConfirm}
                    reservation={context.reservation}
                  />
                </div>
              </li>
            ) : null
          }
        </AppContext.Consumer>
      </>
    );
  }
}

export default FilmItem;
