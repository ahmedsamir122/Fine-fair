import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/mobile.png";
import img2 from "../../images/headphone.webp";
import img3 from "../../images/tablet.png";
import img4 from "../../images/controller.webp";
import img5 from "../../images/laptop.png";
import img6 from "../../images/watch.png";
import Image from "next/image";
import NextCategory from "./NextCategory";
import PrevCategory from "./PrevCategory";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      nextArrow: <NextCategory />,
      prevArrow: <PrevCategory />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    const fotos = [
      {
        color: "#8AC440",
        text: "mobile",
        img: img1,
        class: "first",
      },
      {
        color: "#8AC440",
        text: "accessories",
        img: img2,
        class: "second",
      },
      {
        color: "#8AC440",
        text: "tablets",
        img: img3,
        class: "third",
      },
      {
        color: "#8AC440",
        text: "gaming",
        img: img4,
        class: "fourth",
      },
      {
        color: "#8AC440",
        text: "laptops",
        img: img5,
        class: "fifth",
      },
      {
        color: "#8AC440",
        text: "watches",
        img: img6,
        class: "sixth",
      },
      {
        color: "#8AC440",
        text: "gaming",
        img: img1,
        class: "first",
      },
      {
        color: "#8AC440",
        text: "laptops",
        img: img2,
        class: "second",
      },
      {
        color: "#8AC440",
        text: "watches",
        img: img3,
        class: "third",
      },
      {
        color: "#8AC440",
        text: "gaming",
        img: img4,
        class: "fourth",
      },
      {
        color: "#8AC440",
        text: "laptops",
        img: img5,
        class: "fifth",
      },
      {
        color: "#8AC440",
        text: "watches",
        img: img6,
        class: "sixth",
      },
    ];

    return (
      <div className="secondApp relative w-3/4 pt-2 mx-auto md:w-full">
        <h2 className="py-7 font-semibold  lg:text-xl text-sm font-Rajdhani text-zinc-700">
          SHOP BY CATEGORIES
        </h2>
        <button className="flex items-center hover:bg-blue-900 transition ease-linear hover:text-white  mr-4 rounded-full border px-3 py-2 whitespace-nowrap absolute top-9 right-0">
          <p className="text-xs uppercase">view all</p>
          <HiOutlineArrowNarrowRight className="ml-4" />
        </button>
        <Slider {...settings}>
          {fotos.map((item, index) => {
            return (
              <div className={`rounded-md text-center h-44 relative`}>
                <div
                  className={`${item.class} rounded-3xl h-32 w-full text-center absolute bottom-0 `}
                ></div>
                <h3 className=" absolute bottom-4 w-full uppercase font-Rajdhani font-semibold text-xs">
                  {item.text}
                </h3>
                <Image
                  src={item.img}
                  alt={item.text}
                  className=" absolute block w-2/3 left-1/2 bottom-2/3 translate-y-1/2 -translate-x-1/2"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
