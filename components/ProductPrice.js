import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import { cartActions } from "../store/cart";
import { wishlistActions } from "../store/wishlist";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../Firebase";

const ProductPrice = (props) => {
  const [showHeartWishlist, setShowHeartWishlist] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const showDetailHandler = () => {
    router.push("/shop/" + props.id);
  };
  const item = {
    id: props.id,
    img: props.img,
    price: props.price,
    text: props.text,
    quantity: 1,
    title: props.title,
    wishlist: false,
  };

  const user = auth.currentUser;
  const addCartHandler = () => {
    const user = auth.currentUser;
    if (user) {
      dispatch(cartActions.toggleItemToCart(item));
      console.log(cart);
    }
    if (!user) {
      router.push("/Register");
    }
    props.onNote();
  };
  useEffect(() => {
    const heart = wishlist.find((pro) => pro.id === item.id);
    if (heart) {
      setShowHeartWishlist(true);
    } else {
      setShowHeartWishlist(false);
    }
  }, [wishlist]);

  const toggleWishlistHandler = () => {
    if (user) {
      dispatch(wishlistActions.toggleItemToWishlist(item));
      console.log(cart);
    }
    if (!user) {
      router.push("/Register");
    }

    props.onNote();
  };

  return (
    <div
      className={`rounded-md text-center px-4 py-2 relative cursor-pointer hover:border-green-500 hover:border mt-2 xs:col-span-1 lg:col-span-1 `}
    >
      <div onClick={showDetailHandler} className="w-full relative mb-4 h-40">
        <Image
          src={props.img}
          layout="fill"
          objectFit="contain"
          className="w-full"
          alt=""
        />
      </div>
      <p className=" md:h-28 h-14 text-left text-xs font-Quicksand text-zinc-700 mb-4">
        {props.text}
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
          {props.price}
        </span>
        <span className=" line-through">{props.oldPrice}</span>
      </div>
      <div
        onClick={addCartHandler}
        className=" rounded-md border py-2 font-Rajdhani font-bold text-green-500 bg-green-200 border-green-500  hover:bg-green-500 hover:text-white transition ease-linear"
      >
        ADD TO CART
      </div>
      <div
        onClick={toggleWishlistHandler}
        className="absolute top-4 right-4 border rounded-full flex justify-center items-center bg-lime-200 w-8 h-8"
      >
        {showHeartWishlist ? (
          <AiFillHeart className=" text-green-700" />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
