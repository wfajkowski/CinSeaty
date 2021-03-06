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
      slidesToScroll: 1,
      draggable: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <div className="something">Available films:</div>
          <Slider {...settings}>
            {context.movies.map(item => (
              <CarouselItem
                key={item._id}
                {...item}
                updateFn={context.updateValue}
                openDetails={context.openDetails}
                activeMovie={context.activeMovie}
                movies={context.movies}
              />
            ))}
          </Slider>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default FilmCarousel;
