import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/slide/first_slide.png";
import slide2 from "../../assets/slide/second_slide.png";
import slide3 from "../../assets/slide/third_slide.png";

export default class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div style={{ height: "300px", color: "#fff" }}>
            <img alt="display" src={slide1} />
          </div>
          <div style={{ height: "300px", color: "#fff" }}>
            <img alt="display" src={slide2} />
          </div>
          <div style={{ height: "300px", color: "#fff" }}>
            <img alt="display" src={slide3} />
          </div>
        </Carousel>
      </Carousel>
    );
  }
}
