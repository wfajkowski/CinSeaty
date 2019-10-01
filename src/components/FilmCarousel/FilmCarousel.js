import React from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import AppContext from "../../context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FilmCarousel.css";

class FilmCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      draggable: true,
      arrows: false,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };

    return (
      <AppContext.Consumer>
        {context => (
          <Slider {...settings}>
              {context.movies.map(item => (
                <CarouselItem key={item._id} {...item} />
              ))}
          </Slider>
        )}
      </AppContext.Consumer>
    );
  }
}

export default FilmCarousel;
