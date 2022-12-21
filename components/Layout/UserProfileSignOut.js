import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { cartActions } from "../../store/cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserProfileSignOut = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const routerRegister = () => {
    router.push("/Register");
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(cartActions.closeChange());
        console.log("sign out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div onClick={routerRegister} className="flex items-center shrink-0">
      <CgProfile className=" shrink-0 lg:w-8 lg:h-8 w-6 h-6 lg:text-gray-500 font-medium text-white" />
      <p className="pl-2 text-sm font-Quicksand font-semibold">
        Register/SignIn
      </p>
    </div>
  );
};

export default UserProfileSignOut;
