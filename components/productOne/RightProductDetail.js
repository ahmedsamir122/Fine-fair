import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus, AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { wishlistActions } from "../../store/wishlist";
import { useRouter } from "next/router";

const RightProductDetail = (props) => {
  const [showHeartWishlist, setShowHeartWishlist] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(cart);

  const item = {
    id: props.data.id,
    img: props.data.img,
    price: props.data.price,
    text: props.data.text,
    title: props.data.title,
    quantity: 1,
  };

  console.log(item);
  useEffect(() => {
    const heart = wishlist.find((pro) => pro.id === props.data.id);
    if (heart) {
      setShowHeartWishlist(true);
    } else {
      setShowHeartWishlist(false);
    }
  }, [wishlist]);
  useEffect(() => {
    const button = cart.find((pro) => pro.id === props.data.id);
    if (button) {
      setShowAddButton(false);
    } else {
      setShowAddButton(true);
    }
  }, [cart]);

  const toggleWishlistHandler = () => {
    console.log("toggle");
    dispatch(wishlistActions.toggleItemToWishlist(item));
  };

  const toggleToCart = () => {
    dispatch(cartActions.toggleItemToCart(item));
  };

  return (
    <div className="mt-4 lg:mt-0">
      <h3 className=" text-2xl font-Rajdhani font-semibold">
        {props.data.title}
      </h3>
      <h4 className="mb-3">{props.data.description}</h4>
      <div className="flex">
        <AiFillStar className=" text-yellow-500" />
        <AiFillStar className=" text-yellow-500" />
        <AiFillStar className=" text-yellow-500" />
        <AiFillStar className=" text-yellow-500" />
        <AiOutlineStar className=" text-gray-600" />
        <p className=" text-xs font-Quicksand text-gray-400 ml-2">
          rating :<span>{props.data.rating}</span>
        </p>
      </div>
      <p className=" font-bold font-Rajdhani text-3xl text-footer my-3">
        <span className="mr-2">QR</span>
        {props.data.price}.00
      </p>
      <p className=" font-Quicksand text-sm font-medium my-3">
        <span className=" font-Quicksand text-sm font-bold">In Stock: </span>
        {props.data.stock}
      </p>
      {/* <div className="flex items-center my-4">
        <div className="flex justify-center items-center border rounded-full p-2 mr-4 cursor-pointer">
          <AiOutlinePlus />
        </div>
        <div className="mr-4">1</div>
        <div className="flex justify-center items-center border rounded-full p-2 mr-3 cursor-pointer">
          <AiOutlineMinus />
        </div>
      </div> */}
      <div className="sm:flex items-center my-6">
        <button className="block bg-footer text-white font-bold px-10 py-2 rounded-md mr-3 w-full sm:w-fit mb-3 sm:mb-0">
          Buy Now
        </button>

        <button
          onClick={toggleToCart}
          className="block bg-footer text-white font-bold px-10 py-2 rounded-md mr-3 w-full sm:w-fit mb-3 sm:mb-0"
        >
          {showAddButton ? "ADD TO CART" : "REMOVE FROM CART"}
        </button>

        <div
          onClick={toggleWishlistHandler}
          className="flex items-center justify-center cursor-pointer"
        >
          {!showHeartWishlist && <BsHeart className="mr-2" />}
          {showHeartWishlist && (
            <AiFillHeart className=" text-green-700 mr-2" />
          )}
          <span>Add to Wishlist</span>
        </div>
      </div>
      <p className=" font-Quicksand text-sm font-medium my-3">
        Category :
        <span className=" font-Quicksand text-sm font-bold">
          {props.data.category}
        </span>
      </p>
      <p className=" font-Quicksand text-sm font-medium my-3">
        Brands :
        <span className=" font-Quicksand text-sm font-bold">
          {props.data.brand}
        </span>
      </p>
    </div>
  );
};

export default RightProductDetail;
