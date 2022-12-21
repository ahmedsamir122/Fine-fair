import img1 from "../../images/logo.svg";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { BsSuitHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Modal from "../modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import WishlistItems from "./WishlistItems";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { useRouter } from "next/router";
import UserProfileSignIn from "./UserProfileSignIn";
import UserProfileSignOut from "./UserProfileSignOut";
import ModalBackdrop from "../modal/ModalBackdrop";

const MiddleHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlistItems, setShowWishlistItems] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showWishlistItemsHandler = () => {
    if (user) {
      setShowWishlistItems(!showWishlistItems);
    }
    if (!user) {
      router.push("/Register");
    }
  };
  const cartRoutHandler = () => {
    if (user) {
      router.push("/cart");
    }
    if (!user) {
      router.push("/Register");
    }
  };
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [auth]);

  console.log(user);

  const routerRegister = () => {
    router.push("/Register");
  };
  useEffect(() => {
    if (cart.length === 0) {
      setShowCart(false);
    }
    if (cart.length !== 0) {
      setShowCart(true);
    }
  }, [cart]);
  useEffect(() => {
    if (wishlist.length === 0) {
      setShowWishlist(false);
    }
    if (wishlist.length !== 0) {
      setShowWishlist(true);
    }
  }, [wishlist]);

  return (
    <div className="  bg-lime-500 lg:bg-transparent">
      <div className="flex items-center justify-between container lg:w-full bg-lime-500 lg:bg-transparent m-auto cursor-pointer">
        <Link href="/" className="lg:ml-4 shrink-0 flex items-center">
          <AiOutlineMenu
            onClick={toggleModalHandler}
            className="lg:hidden w-10 h-10 text-white mr-3 "
          />
          <Image
            src={img1}
            alt="logo"
            width={120}
            height={50}
            className="hidden lg:block mr-1"
          />
        </Link>
        <div className="lg:flex hidden w-2/4 rounded-md  overflow-hidden  ">
          <input
            type="text"
            placeholder="search for products"
            className=" pl-4 flex-1 border active:outline-none focus:outline-none hidden lg:block"
          />
          <button className=" text-white bg-lime-500 py-4 px-5 uppercase font-bold text-xs hidden lg:block hover:scale-90 transition ease-linear">
            search
          </button>
        </div>
        <div className="flex mr-2 lg:mr-16 ml-6">
          {user && <UserProfileSignIn />}
          {!user && <UserProfileSignOut />}
          <div className="relative">
            <BsSuitHeart
              onClick={showWishlistItemsHandler}
              className=" shrink-0 lg:w-8 lg:h-8 w-6 h-6 hover:text-green-200 cursor-pointer lg:text-zinc-800 text-white font-medium ml-6"
            />

            {showWishlist && (
              <div className=" absolute top-0 right-0 p-3 translate-x-2/4 -translate-y-1/2 w-4 h-4 rounded-full bg-lime-400 flex justify-center items-center ">
                {wishlist.length}
              </div>
            )}
            {showWishlistItems && <WishlistItems />}
          </div>
          <div className="flex ml-6 relative">
            <div onClick={cartRoutHandler} className=" relative">
              <BsCart3 className="hover:text-green-200 cursor-pointer shrink-0 lg:w-8 lg:h-8 w-6 h-6 lg:text-zinc-800 text-white font-bold" />
              {showCart && (
                <div className=" absolute top-0 right-0 p-3 translate-x-2/4 -translate-y-1/2 w-4 h-4 rounded-full bg-lime-400 flex justify-center items-center ">
                  {cart.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:hidden mx-auto py-4 px-1">
        <input
          className="w-full text-base active:outline-none focus:outline-none p-2 rounded-md"
          placeholder="search for the products"
        />
      </div>
      <Modal show={showModal} onClose={closeModalHandler} />
      <ModalBackdrop show={showModal} onClose={closeModalHandler} />
    </div>
  );
};

export default MiddleHeader;
