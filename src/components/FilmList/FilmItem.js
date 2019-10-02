import React from "react";
import axios from "axios";
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
    // console.log(this.state.programme);
    return (
      <AppContext.Consumer>
        {context => (
          <li className={styles.filmItem} onClick = {context.openDetails}>
            <div className={styles.filmCover}>
              <img
                src={this.props.photo}
                alt={this.props.title}
                onClick={context.openDetails}
              />
            </div>
            <div className={styles.filmDetails}>
              <h4>{this.props.title}</h4>
              <FilmProgramme programme={this.state.programme} />
            </div>
          </li>
        )}
      </AppContext.Consumer>
    );
  }
}

// const FilmItem = ({
//   photo,
//   title,
//   genre,
//   duration,
//   description,
//   adult,
//   premiere,
//   production,
//   trailer,
//   _id
// }) => {
//   return (
//     <AppContext.Consumer>
//       {context => (
//         <li className={styles.filmItem}>
//           <div className={styles.filmCover}>
//             <img src={photo} alt={title} />
//             <p>{_id}</p>
//           </div>
//           <h4>{title}</h4>
//         </li>
//       )}
//     </AppContext.Consumer>
//   );
// };

export default FilmItem;
