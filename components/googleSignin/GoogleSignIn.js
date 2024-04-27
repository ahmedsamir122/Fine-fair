import { auth } from "../../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import img from "../../images/google.png";
import Image from "next/image";
import { db } from "../../Firebase";
import {
  setDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

const GoogleSignIn = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const googleSigninHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const docRef = doc(db, "users", user.uid);
        const payload = {
          cart: [],
          wishlist: [],
        };
        setDoc(docRef, payload);
        router.push("/shop");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div
      onClick={googleSigninHandler}
      className="relative w-10 h-10 cursor-pointer"
    >
      <Image
        src={img}
        alt=""
        className="w-full "
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};

export default GoogleSignIn;
