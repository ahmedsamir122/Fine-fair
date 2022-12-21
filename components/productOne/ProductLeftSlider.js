import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class ProductLeftSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const { images } = this.props.data;
    return (
      <div className="w-full overflow-hidden productSlider">
        <div className="sm:flex ">
          {/* <h4>Second Slider</h4> */}
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            verticalSwiping={true}
            responsive={[
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  speed: 500,
                  initialSlide: 0,
                  verticalSwiping: false,
                  vertical: false,
                  swipeToSlide: true,
                },
              },
            ]}
          >
            {images?.map((item) => {
              return (
                <div className="relative w-6 h-20 sm:w-14 sm:h-14 cursor-pointer">
                  <Image
                    src={item}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="w-full"
                  />
                </div>
              );
            })}
          </Slider>

          {/* <h4>First Slider</h4> */}
          <div className="w-3/4 h-80 ">
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              fade={true}
              slidesToShow={1}
              slidesToScroll={1}
              infinite={true}
            >
              {images?.map((item) => {
                return (
                  <div className="relative w-full h-80  ">
                    <Image
                      src={item}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className="w-full"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
