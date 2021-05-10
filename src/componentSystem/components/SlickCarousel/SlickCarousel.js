import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import './SlickCarousel.scss';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      adaptiveHeight: true,
    };
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}

SimpleSlider.defaultProps = {
  children: null,
};

SimpleSlider.propTypes = {
  children: PropTypes.node,
};
