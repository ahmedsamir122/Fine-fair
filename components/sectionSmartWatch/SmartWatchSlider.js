import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/product-1.jpg";
import img7 from "../../images/product-3.jpg";
import Image from "next/image";
import NextCategory from "../sectionCategory/NextCategory";
import PrevCategory from "../sectionCategory/PrevCategory";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
export default class SmartWatchSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <NextCategory />,
      prevArrow: <PrevCategory />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img1,
        class: "first",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img2,
        class: "second",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img3,
        class: "third",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img4,
        class: "fourth",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img5,
        class: "fifth",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img6,
        class: "sixth",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img7,
        class: "first",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img3,
        class: "second",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img4,
        class: "third",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
      {
        color: "#8AC440",
        text: "Cubit Smart Watch Ct2s Waterproof Fitness Tracker",
        img: img5,
        class: "fourth",
        price: "QR 165.00",
        oldPrice: "250.00",
      },
    ];

    return (
      <div className="secondApp relative w-3/4 pt-2 mx-auto md:w-full ">
        <h2 className="py-7 font-semibold lg:text-xl md:text-sm text-xs font-Rajdhani text-zinc-700 border-b">
          SMART WATCHES
        </h2>
        <button className="flex items-center  hover:bg-blue-900 transition ease-linear hover:text-white md:mr-4 mr-0 rounded-full border px-3 py-2 whitespace-nowrap absolute top-9 right-0">
          <p className="text-xs uppercase">view all</p>
          <HiOutlineArrowNarrowRight className="ml-4" />
        </button>
        <Slider {...settings}>
          {fotos.map((item, index) => {
            return (
              <div
                className={`rounded-md text-center px-4 py-2 relative cursor-pointer hover:border-green-500 hover:border mt-2`}
              >
                <div className=" mb-4">
                  <Image src={item.img} className="w-full" alt="" />
                </div>
                <p className=" text-left text-xs font-Quicksand text-zinc-700 mb-4">
                  {item.text}
                </p>
                <div className="flex mb-4">
                  <AiFillStar className=" text-amber-600" />
                  <AiFillStar className=" text-amber-600" />
                  <AiFillStar className=" text-amber-600" />
                  <AiFillStar className=" text-amber-600" />
                  <AiOutlineStar />
                </div>
                <div className="text-left mb-4 flex flex-col md:block">
                  <span className="pr-2 text-xl text-blue-900 font-bold">
                    {item.price}
                  </span>
                  <span className=" line-through">{item.oldPrice}</span>
                </div>
                <Link
                  href="/shop"
                  className="block rounded-md border py-2 font-Rajdhani font-bold text-green-500 bg-green-200 border-green-500  hover:bg-green-500 hover:text-white transition ease-linear"
                >
                  ADD TO CART
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
