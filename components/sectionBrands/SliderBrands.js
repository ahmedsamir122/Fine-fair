import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/brand-1.svg";
import img2 from "../../images/brand-2.svg";
import img3 from "../../images/brand-3.svg";
import img4 from "../../images/brand-4.svg";
import img5 from "../../images/brand-5.svg";
import img6 from "../../images/brand-6.svg";
import img7 from "../../images/brand-7.svg";
import img8 from "../../images/brand-1 (1).svg";
import img9 from "../../images/brand-2 (1).svg";
import Image from "next/image";
import NextCategory from "../sectionCategory/NextCategory";
import PrevCategory from "../sectionCategory/PrevCategory";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
export default class SliderBrands extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
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
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
        img: img7,
        class: "first",
      },
      {
        color: "#8AC440",
        text: "laptops",
        img: img8,
        class: "second",
      },
      {
        color: "#8AC440",
        text: "laptops",
        img: img2,
        class: "second",
      },
    ];

    return (
      <div className="secondApp relative w-3/4 pt-2 mx-auto md:w-full">
        <h2 className="py-7 font-semibold lg:text-xl text-sm font-Rajdhani text-zinc-700">
          SHOP BY CATEGORIES
        </h2>
        <button className="flex items-center  hover:bg-blue-900 transition ease-linear hover:text-white mr-4 rounded-full border px-3 py-2 whitespace-nowrap absolute top-9 right-0">
          <p className="text-xs uppercase">view all</p>
          <HiOutlineArrowNarrowRight className="ml-4" />
        </button>
        <Slider {...settings}>
          {fotos.map((item, index) => {
            return (
              <div className=" rounded-2xl relative lg:h-44 h-24 bg-amber-100 hover:bg-white hover:scale-105 transition-all ease-linear hover:shadow-2xl">
                <Image
                  src={item.img}
                  alt={item.text}
                  className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
