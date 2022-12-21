import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import img from "../../images/logo-footer.svg";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <section className=" bg-footer px-20 pt-20 pb-4">
      <div className=" grid lg:grid-cols-4 container mx-auto border-b border-gray-500 pb-6">
        <div className=" lg:col-span-1 text-left  pl-5">
          <div className="mb-10 flex-shrink-0 lg:pr-24  w-60 pr-10">
            <Image src={img} className="w-full object-cover shrink-0" />
          </div>
          <p className="text-white text-xs mb-5">STAY TOUCH WITH US</p>
          <div className="flex pb-4">
            <div className="mr-6 border rounded-full p-1 bg-transparent border-gray-500 cursor-pointer">
              <FaFacebookF className=" text-gray-500 hover:text-green-500 transition ease-linear" />
            </div>
            <div className="mr-6 border rounded-full p-1 bg-transparent border-gray-500 cursor-pointer ">
              <BsInstagram className=" text-gray-500 hover:text-green-500 transition ease-linear" />
            </div>
            <div className="mr-6 border rounded-full p-1 bg-transparent border-gray-500 cursor-pointer">
              <FaYoutube className=" text-gray-500 hover:text-green-500 transition ease-linear" />
            </div>
          </div>
        </div>
        <div className=" lg:col-span-1 px-5 text-left">
          <p className="pb-6 text-sm text-white">QUICK LINKS</p>
          <p className="text-gray-500 pb-1  hover:text-white transition ease-linear cursor-pointer">
            Shop by Category
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            All Brands
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            About Us
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            Terms & Conditions
          </p>
        </div>
        <div className=" lg:col-span-1 px-5 text-left">
          <p className="pb-6 text-sm text-white">MY ACCOUNT</p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            My account
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            Cart
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            Wishlist
          </p>
          <p className="text-gray-500 pb-1 hover:text-white transition ease-linear cursor-pointer">
            My orders
          </p>
        </div>
        <div className=" lg:col-span-1 px-5 text-left">
          <p className="pb-6 text-sm text-white">HELP & SUPPORT</p>
          <p className="text-white pb-4">Chat On Whatsapp</p>
          <div className="flex text-white pb-4 text-2xl items-center">
            <div>
              <BsWhatsapp />
            </div>
            <p>+974 12144568</p>
          </div>
          <p className=" text-green-200 pb-1 text-xs">For complaints</p>
          <p className="text-gray-500 pb-1">info@finefair.qa</p>
        </div>
      </div>
      <div className="pt-6">
        <p className="text-gray-500">
          ©2022-finefair . All rights are reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
