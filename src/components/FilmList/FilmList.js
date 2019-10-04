import React from "react";
import axios from "axios";
import Moment from "moment";
import FilmItem from "./FilmItem";
import AppContext from "../../context";
import styles from "./FilmList.module.scss";
import AvailableDates from "../AvailableDates/AvailableDates";

class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
    };
  }

  componentDidMount() {
    let programmes = [];
    let allDates = [];
    axios.get("http://localhost:3001/api/programmes").then(res => {
      programmes = [...res.data];
      programmes.forEach(item =>
        allDates.push(Moment(item.time).format("D.M"))
        );
        let filteredDates = allDates
          .filter((item, index, self) => {
            return index === self.indexOf(item);
          });
        this.setState({
          dates: filteredDates.slice(
            filteredDates.indexOf(Moment().format("D.M"))
          )
        });
      });
    }
    
    render() {
      // console.log("-----", this.state.dates, "-----");
      // console.log("--->", this.props.activeDate);
      // console.log("--->", this.props.activeDate !== 'Dzisiaj' ? this.props.activeDate : Moment().format("D.M"));
      return (
        <AppContext.Consumer>
          {context => (
            <>
              <AvailableDates dates={this.state.dates} {...context} />
              <ul className={styles.filmListWrapper}>
                {context.movies.map(item => (
                  <FilmItem key={item._id} {...item} date={this.props.activeDate} />
                ))}
              </ul>
            </>
          )}
        </AppContext.Consumer>
      );
  }
}

export default FilmList;
