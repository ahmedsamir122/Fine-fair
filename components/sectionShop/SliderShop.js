import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/watch-listpage-banner-pink-v2-mobile.jpg.thumb.png";
import img2 from "../../images/AirPods-ad-Siri-teaser-002.png";
import img3 from "../../images/UniversalHero_SurfacePro_VP1-539x440.png";
import img4 from "../../images/watch-listpage-banner-pink-v2-mobile.jpg.thumb.png";
import Image from "next/image";
import NextHotDeals from "../sectionHotDeals/NextHotDeals";
import PrevHotDeals from "../sectionHotDeals/PrevHotDeals";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
export default class ShopSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <NextHotDeals />,
      prevArrow: <PrevHotDeals />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const fotos = [
      {
        color: "#8AC440",
        text: "Smart Watch",
        text1: "Samsung ",
        img: img1,
        class: "first",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Airpod Pro",
        text1: "Apple",
        img: img2,
        class: "second",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Surface Pro",
        text1: "Microsoft",
        img: img3,
        class: "third",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Smart Watch",
        text1: "Samsung",
        img: img4,
        class: "fourth",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
    ];

    return (
      <div className="secondApp relative w-3/4 pt-2 mx-auto md:w-full  ">
        <Slider {...settings}>
          {fotos.map((item, index) => {
            return (
              <div
                className={`rounded-md text-center px-4 py-2 relative bg-white `}
              >
                <div>
                  <Image src={item.img} alt="" />
                </div>
                <div className=" absolute bottom-10 left-10 text-left">
                  <h3 className=" font-bold text-white text-3xl">
                    {item.text1}
                  </h3>
                  <h3 className=" font-bold text-white text-3xl">
                    {item.text}
                  </h3>
                  <div className=" font-bold text-white text-sm mt-4 px-4 w-fit py-1 rounded-full text-center bg-blue-900">
                    shop now
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
