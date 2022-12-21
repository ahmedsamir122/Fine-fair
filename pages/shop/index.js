import React from "react";
import LeftSection from "../../components/shopPage/leftsection/LeftSection";
import RightSection from "../../components/shopPage/rightsection/RightSection";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Firebase";
import { db } from "../../Firebase";
import { useEffect } from "react";
import { sendCartData } from "../../store/cart";
import { getCartData } from "../../store/cart";
import { sendWishlistData } from "../../store/wishlist";
import { getWishlistData } from "../../store/wishlist";
import { onAuthStateChanged } from "firebase/auth";
export default function Shop() {
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
    if (!user) {
      return;
    }
    if (user) {
      if (change || changeWishlist) {
        const id = user.uid;
        console.log("send");
        dispatch(sendCartData(cart, id, db));
        dispatch(sendWishlistData(wishlist, id, db));
        console.log("wishlist");
      }
    }
  }, [cart, wishlist]);

  return (
    <section>
      <div className="container mx-auto grid md:grid-cols-4 pt-10 pl-3">
        <div className=" md:col-span-1 md:pr-12 pr-3 border-r ">
          <LeftSection />
        </div>
        <div className=" md:col-span-3 mx-auto md:pl-10">
          <RightSection />
        </div>
      </div>
    </section>
  );
}
