import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import SectionIklan from "../components/sectionSlider/SectionIklan";
import SectionCategory from "../components/sectionCategory/SectionCategory";
import SectionPhotos from "../components/sectionPhotos/SectionPhotos";
import SectionNewArrivals from "../components/sectionNewArrivals/SectionNewArrivals";
import SectionIklan2 from "../components/sectionIklan/SectionIklan2";
import SectionBrands from "../components/sectionBrands/SectionBrands";
import SectionAccessories from "../components/sectionAccessories/SectionAccssories";
import SectionSmartWatch from "../components/sectionSmartWatch/SectionSmartWatch";
import SectionHotDeals from "../components/sectionHotDeals/SectionHotDeals";
import SectionShop from "../components/sectionShop/SectionShop";
import SectionServices from "../components/sectionServices/SectionServices";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <SectionIklan />
      <SectionCategory />
      <SectionPhotos />
      <SectionNewArrivals />
      <SectionIklan2 />
      <SectionBrands />
      <SectionAccessories />
      <SectionSmartWatch />
      <SectionHotDeals />
      <SectionShop />
      <SectionServices />
    </React.Fragment>
  );
}
