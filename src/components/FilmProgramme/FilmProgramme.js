import React from "react";
import Moment from "moment";
import AppContext from "../../context";
import styles from "./FilmProgramme.module.scss";

class FilmProgramme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProgramme : null
    }
  }

  handleClick = e => {
    let chooseProgramme = e.target.getAttribute("programme_id");
    this.setState({activeProgramme: chooseProgramme});
    this.props.updateFn("programme_id", chooseProgramme);
    this.props.updateFn("activeMovie", this.props.movie);
    this.props.openConfirm();
    console.log(this.props);
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.filmProgramme}>
            <div className={styles.hours}>
              <p>Showtimes:</p>
              <ul className={styles.ul}>
                {this.props.programme.map(
                  item =>
                    Moment(item.time) > Moment() &&
                    context.activeDate === Moment(item.time).format("D.M") && (
                      <li
                        onClick={this.handleClick}
                        key={item._id}
                        programme_id={item._id}
                      >
                        <p programme_id={item._id}>
                          {Moment(item.time).format("D.M")}
                        </p>
                        <p programme_id={item._id}>
                          {Moment(item.time).format("HH:mm")}
                        </p>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
};

// const FilmProgramme = ({ programme }) => {
//   return (
//     <AppContext.Consumer>
//       {context => (
//         <div className={styles.filmProgramme}>
//           <div className={styles.hours}>
//             <p>Seanse:</p>
//             <ul className={styles.ul}>
//               {programme.map(
//                 item =>
//                   Moment(item.time) > Moment() &&
//                   context.activeDate === Moment(item.time).format("D.M") && (
//                     <li key={item._id}>
//                       <p>{Moment(item.time).format("D.M")}</p>
//                       <p>{Moment(item.time).format("HH:mm")}</p>
//                     </li>
//                   )
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </AppContext.Consumer>
//   );
// };

export default FilmProgramme;
