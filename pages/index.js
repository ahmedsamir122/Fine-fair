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
import { useEffect } from "react";
import { sendCartData } from "../store/cart";
import { auth } from "../Firebase";
import { useSelector } from "react-redux";
import { db } from "../Firebase";
import { useDispatch } from "react-redux";
import { getCartData } from "../store/cart";
import { getWishlistData } from "../store/wishlist";
import { sendWishlistData } from "../store/wishlist";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const change = useSelector((state) => state.cart.change);
  const changeWishlist = useSelector((state) => state.wishlist.change);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("noget");
        return;
      }
      if (currentUser) {
        const id = currentUser.uid;
        console.log(id);
        dispatch(getCartData(id, db));
        dispatch(getWishlistData(id, db));
        console.log("get");
      }
    });
  }, [auth, dispatch, onAuthStateChanged]);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        return;
      }
      if (currentUser) {
        if (change || changeWishlist) {
          const id = currentUser.uid;
          console.log("send");
          dispatch(sendCartData(cart, id, db));
          dispatch(sendWishlistData(wishlist, id, db));
          console.log("wishlist");
        }
      }
    });
  }, [cart, onAuthStateChanged]);

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
