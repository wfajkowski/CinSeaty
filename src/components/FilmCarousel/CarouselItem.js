import React from "react";
// import styles from "./CarouselItem.module.scss";

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
    this.state = {
      loaded: false,
      height: null
    };
  }

  componentDidMount() {
    if (this.state.height === null) this.handleImageLoaded();
    window.addEventListener("resize", this.handleWindowResize.bind(this));
  }

  handleWindowResize() {
    this.setState({
      height: Math.round(this.itemRef.current.clientWidth * 1.5)
    });
    console.log('bla', this.itemRef.current.clientWidth);
  }

  handleImageLoaded() {
    if (!this.state.loaded) {
      this.setState({
        loaded: true,
        height: Math.round(this.itemRef.current.clientWidth * 1.5)
      });
    }
  }

  render() {
    console.log(this.itemRef);
    console.log(this.state.loaded);
    console.log(this.state.height);
    return (
      <>
        <div
          ref={this.itemRef}
          style={{
            backgroundImage: `url(${this.props.photo})`,
            height: `${this.state.height}px`,
            backgroundSize: "cover"
          }}
          onLoad={this.handleImageLoaded.bind(this)}
        ></div>
      </>
    );
  }
} 
// ({
//   photo,
//   title,
//   genre,
//   duration,
//   description,
//   adult,
//   premiere,
//   production,
//   trailer
// }) => {
//   const ref = React.createRef();
//   console.log(ref.current);
//   return (
//     <AppContext.Consumer>
//       {context => (
//         <>
//           <div style={{backgroundImage: `url(${photo})`, height: 'auto', backgroundSize: 'cover'}}></div>
//         </>
//       )}
//     </AppContext.Consumer>
//   );
// };

export default CarouselItem;
