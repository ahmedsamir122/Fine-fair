import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/mobile-phone-cases-mockup-product-showcase.jpg";
import img2 from "../../images/phone-mobile-connect-battery-power-bank.jpg";
import img3 from "../../images/top-view-smartphone-with-keyboard-charger.jpg";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import NextSlider from "./NextSlider";
import PreSlider from "./PreSlider";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextSlider />,
      prevArrow: <PreSlider />,
    };

    const images = [
      { name: img1, text: "Mobile" },
      { name: img2, text: "Mobile" },
      { name: img3, text: "Mobile" },
    ];
    return (
      <div className="firstApp border h-96">
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <div className="relative ">
                <Image
                  src={item.name}
                  className="w-full h-96 object-cover block "
                  alt=""
                />
                <div className="absolute lg:left-64 pl-20 lg:pl-0 top-0 z-10 w-full  flex ">
                  <div>
                    <h4 className=" text-sm font-bold text-indigo-900 font-Quicksand mt-12">
                      NEW ARRIVALS
                    </h4>
                    <p className=" font-Rajdhani font-bold lg:text-6xl text-4xl text-stone-800 mt-5">
                      MOBILE &
                    </p>
                    <p className=" font-Rajdhani font-bold lg:text-6xl text-4xl text-stone-800 mt-2 mb-1">
                      ACCESSORIES
                    </p>

                    <p className=" font-Quicksand font-bold text-xs text-stone-800 mb-4">
                      Headphones, Chargers & Cables.
                    </p>
                    <button className="flex py-1 px-2 items-center bg-blue-900 rounded-full hover:bg-green-500 transition ease-linear">
                      <span className=" font-bold text-md text-white font-Quicksand">
                        shop now
                      </span>
                      <div className="ml-3 rounded-full bg-white py-2 px-2 text-black">
                        <BiChevronRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
