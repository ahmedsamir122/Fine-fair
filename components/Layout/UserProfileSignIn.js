import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { wishlistActions } from "../../store/wishlist";

const UserProfileSignIn = () => {
  const [showProfileData, setShowProfileData] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [auth]);

  const routerRegister = () => {
    setShowProfileData(!showProfileData);
  };

  console.log(user);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        router.push("/");
        dispatch(wishlistActions.replaceWishlist([]));
        dispatch(cartActions.replaceCart([]));
        dispatch(cartActions.closeChange());
        dispatch(wishlistActions.closeChange());
        console.log("sign out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div onClick={routerRegister} className="flex items-center shrink-0">
      <CgProfile className=" shrink-0 lg:w-8 lg:h-8 w-6 h-6 lg:text-gray-500 font-medium text-white" />
      <div className="relative pl-2 ">
        <p className=" text-xs text-gray-500 font-semibold">My account</p>
        <p className=" text-xs text-gray-500 font-semibold cursor-pointer">
          {user.email}
        </p>
        {showProfileData && (
          <div className="text-xs text-gray-400 absolute z-10 top-10 shadow-lg right-0 list-none bg-white px-2 ">
            <Link
              href="/"
              className="flex items-center border-b-2 hover:text-lime-500 py-2"
            >
              <CgProfile />
              <div className="w-32 pl-3">MY ACCOUNT</div>
            </Link>

            <Link
              href="/"
              className="flex items-center border-b-2 hover:text-lime-500 py-2"
            >
              <CgProfile />
              <div className="w-32 pl-3">MY ORDERS</div>
            </Link>

            <div
              onClick={signOutHandler}
              className="flex items-center hover:text-lime-500 py-2"
            >
              <CgProfile />
              <div className="w-32 pl-3">Sign Out</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileSignIn;
