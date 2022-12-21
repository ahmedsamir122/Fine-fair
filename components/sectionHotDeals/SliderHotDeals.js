import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/el_hover_img2.png";
import img2 from "../../images/el_hover_img3.png";
import img3 from "../../images/N47626990A_1.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/product-1.jpg";
import img7 from "../../images/product-3.jpg";
import Image from "next/image";
import NextHotDeals from "./NextHotDeals";
import PrevHotDeals from "./PrevHotDeals";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import classes from "./SliderHotDeals.module.css";
import Link from "next/link";
export default class HotDealsSlider extends Component {
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
    ];

    return (
      <div className="secondApp relative w-3/4 pt-2 mx-auto md:w-full  ">
        <Slider {...settings}>
          {fotos.map((item, index) => {
            return (
              <div
                className={`${classes.main} rounded-md text-center px-4 py-2 relative bg-white `}
              >
                <div className=" mb-4">
                  <Image src={item.img} className="w-full" alt="" />
                </div>
                <p className=" text-center text-xs font-Quicksand text-zinc-700 mb-4">
                  {item.text}
                </p>
                <div className="flex mb-4 justify-center">
                  <AiFillStar className=" text-amber-600" />
                  <AiFillStar className=" text-amber-600" />
                  <AiFillStar className=" text-amber-600" />
                  <AiFillStar className=" text-amber-600" />
                  <AiOutlineStar />
                </div>
                <div className="text-center mb-4 flex flex-col md:block">
                  <span className="pr-2 text-xl text-blue-900 font-bold">
                    {item.price}
                  </span>
                  <span className=" line-through">{item.oldPrice}</span>
                </div>
                <Link
                  href="/shop"
                  // className={classes.nnn}
                  className={`${classes.nnn} rounded-md border py-2 px-2 font-Rajdhani font-bold text-green-500 bg-green-200 border-green-500  hover:bg-green-500 hover:text-white transition ease-linear absolute bottom-36 left-1/2 -translate-x-1/2 `}
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
