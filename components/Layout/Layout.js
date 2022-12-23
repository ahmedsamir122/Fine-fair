import React from "react";
import Header from "./Header";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { db } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { useSelector } from "react-redux";
import { getCartData } from "../../store/cart";
import { getWishlistData } from "../../store/wishlist";
import { sendCartData } from "../../store/cart";
import { sendWishlistData } from "../../store/wishlist";
import { useDispatch } from "react-redux";
const Layout = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const change = useSelector((state) => state.cart.change);
  const changeWishlist = useSelector((state) => state.wishlist.change);
  const user = auth.currentUser;
  console.log(user);

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
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
